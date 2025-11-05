import express from 'express';
import { PrismaClient } from '@prisma/client';
import { assert } from 'superstruct';
import cors from 'cors';
import { CreateComment, PatchComment } from '../structs/structs.js';

const app = express();
app.use(express.json());
app.use(cors());

const prisma = new PrismaClient();

export async function postArticleComment(req, res) {
  const { id: articleId } = req.params;
  const { content } = req.body;
  assert({ articleId, content }, CreateComment);
  const contentArray = Array.isArray(content) ? content : [content];

  const article = await prisma.article.update({
    where: { id: articleId },
    data: {
      comments: {
        create: contentArray.map((c) => ({ content: c }))
      }
    },
    include: { comments: true }
  });
  res.status(200).send(article);
}

export async function postProductComment(req, res) {
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

export async function patchComment(req, res) {
  const { id } = req.params;
  assert(req.body, PatchComment);
  const comment = await prisma.comment.update({
    where: { id },
    data: req.body
  });
  res.status(201).send(comment);
}

export async function deleteComment(req, res) {
  const { id } = req.params;
  const comment = await prisma.comment.delete({ where: { id } });
  res.status(201).send('Comment deleted.');
}

export async function getComment(req, res) {
  const { id } = req.params;
  const comment = await prisma.comment.findUniqueOrThrow({
    where: { id }
  });
  res.status(200).send(comment);
}

export async function getCommentList(req, res) {
  const { offset = 0, limit = 0, order = 'recent', productId, articleId, content } = req.query;
  let orderBy;
  if (order !== 'recent') {
    orderBy = { createdAt: 'asc' };
  } else {
    orderBy = { createdAt: 'desc' };
  }

  let comments;

  if (productId) {
    comments = await prisma.comment.findMany({
      where: { id: productId },
      orderBy
    });
  } else if (articleId) {
    comments = await prisma.comment.findMany({
      where: { id: articleId },
      orderBy
    });
  } else {
    comments = await prisma.comment.findMany({
      where: { content: { contains: content } },
      orderBy
    });
  }
  res.status(200).send(comments);
}
