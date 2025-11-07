import express from 'express';
import { PrismaClient } from '@prisma/client';
import { assert } from 'superstruct';
import cors from 'cors';
import { CreateComment } from '../struct/structs.js';

const app = express();
app.use(express.json());
app.use(cors());

const prisma = new PrismaClient();

export async function postProduct(req, res) {
  const data = req.body;
  //assert(data, CreateProduct);
  const product = await prisma.product.create({
    data,
    include: { comments: true }
  });
  console.log('Product created.');
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
  console.log('Product list retrieved.');
  res.status(200).send(products);
}

export async function getProduct(req, res) {
  const { productId: id } = req.params;
  const product = await prisma.product.findFirstOrThrow({
    where: { id },
    include: {
      imageUrls: false,
      updatedAt: false
    }
  });
  //product.comments = product.comments.map(({ articleId, updatedAt, ...rest }) => rest);
  console.log('Product found.');
  res.status(200).send(product);
}

export async function patchProduct(req, res) {
  const { productId: id } = req.params;
  const data = req.body;
  //assert(data, PatchProduct);
  const product = await prisma.product.update({
    where: { id },
    data,
    include: { comments: true }
  });
  console.log('Product patched.');
  res.status(201).send(product);
}

export async function deleteProduct(req, res) {
  const { productId: id } = req.params;
  const product = await prisma.product.delete({ where: { id } });
  console.log('Product deleted.');
  res.status(201).send('Product deleted.');
}

//---------------------------------------------- comment 여기부터
export async function postProductComment(req, res) {
  const { productId } = req.params;
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
  product.comments = product.comments.map(({ articleId, ...rest }) => rest);
  console.log('Comments created.');
  res.status(200).send(product);
}

export async function getProductCommentList(req, res) {
  const { productId } = req.params;
  const product = await prisma.product.findUniqueOrThrow({
    where: { id: productId },
    select: { comments: true }
  });
  product.comments = product.comments.map(({ articleId, ...rest }) => rest);
  console.log('Comment list retrieved.');
  res.status(200).send(product);
}

export async function deleteProductCommentList(req, res) {
  const { productId } = req.params;
  const product = await prisma.product.update({
    where: { id: productId },
    data: { comments: { deleteMany: {} } },
    include: { comments: true }
  });
  console.log('Comments deleted.');
  res.status(201).send(product);
}

export async function deleteProductComment(req, res) {
  const { productId, commentId } = req.params;
  const product = await prisma.product.update({
    where: { id: productId },
    data: { comments: { deleteMany: { id: commentId } } },
    include: { comments: true }
  });
  console.log('1 comment deleted.');
  res.status(201).send(product);
}
