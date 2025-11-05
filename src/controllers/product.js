import express from 'express';
import { PrismaClient } from '@prisma/client';
import { assert } from 'superstruct';
import cors from 'cors';
import { CreateComment, CreateProduct, PatchProduct } from '../structs/structs.js';

const app = express();
app.use(express.json());
app.use(cors());

const prisma = new PrismaClient();

export async function postProduct(req, res) {
  const data = req.body;
  assert(data, CreateProduct);
  const product = await prisma.product.create({ data });
  res.status(200).send(product);
}

export async function getProductList(req, res) {
  const { offset = 0, limit = 0, order = 'recent', name, description } = req.query;
  let orderBy;
  if (order !== 'recent') {
    orderBy = { createdAt: 'asc' };
  } else {
    orderBy = { createdAt: 'desc' };
  }

  const products = await prisma.product.findMany({
    where: { name: { contains: name }, description: { contains: description } },
    orderBy,
    skip: parseInt(offset),
    take: parseInt(limit) || undefined,
    select: {
      id: true,
      name: true,
      price: true,
      createdAt: true
    }
  });
  res.send(products);
}

export async function getProduct(req, res) {
  const { id } = req.params;
  const product = await prisma.product.findFirstOrThrow({
    where: { id },
    // omit: {
    //   images: true,
    //   updatedAt: true
    // }
    select: {
      id: true,
      name: true,
      description: true,
      price: true,
      tags: true,
      createdAt: true
    }
  });
  res.send(product);
}

export async function patchProduct(req, res) {
  const { id } = req.params;
  const data = req.body;
  assert(data, PatchProduct);
  const product = await prisma.product.update({ where: { id }, data });
  res.status(201).send(product);
}

export async function deleteProduct(req, res) {
  const id = req.params.id;
  const product = await prisma.product.delete({ where: { id } });
  res.status(201).send('Product deleted.');
}

export async function postComment(req, res) {
  const { id: productId } = req.params;
  const { content } = req.body;
  assert({ productId, content }, CreateComment);
  const contentArray = Array.isArray(content) ? content : [content];

  const product = await prisma.product.update({
    where: { id: productId },
    data: {
      comments: {
        create: contentArray.map((c) => ({ content: c }))
      }
    },
    include: { comments: true }
  });
  res.status(200).send(product);
}

export async function getCommentList(req, res) {
  const { id: productId } = req.params;
  const product = await prisma.product.findUniqueOrThrow({
    where: { id: productId },
    select: { comments: true }
  });
  res.status(200).send(product);
}

export async function deleteCommentList(req, res) {
  const { id: productId } = req.params;
  const comments = await prisma.comment.deleteMany({
    where: { productId }
  });
  res.status(201).send('Comments deleted.');
}
