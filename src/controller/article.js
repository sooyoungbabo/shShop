import express from 'express';
import { PrismaClient } from '@prisma/client';
import { assert } from 'superstruct';
import cors from 'cors';
import { CreateComment } from '../struct/structs.js';

const app = express();
app.use(express.json());
app.use(cors());

const prisma = new PrismaClient();

export async function postArticle(req, res) {
  const data = req.body;
  //assert(data, CreateArticle);
  const article = await prisma.article.create({ data });
  res.status(200).send(article);
}

export async function getArticleList(req, res) {
  const { offset = 0, limit = 0, order = 'recent', title, content } = req.query;
  let orderBy;
  if (order !== 'recent') {
    orderBy = { createdAt: 'asc' };
  } else {
    orderBy = { createdAt: 'desc' };
  }

  const articles = await prisma.article.findMany({
    where: { title: { contains: title }, content: { contains: content } },
    orderBy,
    skip: parseInt(offset),
    take: parseInt(limit) || undefined,
    select: {
      id: true,
      title: true,
      content: true,
      createdAt: true
    }
  });
  console.log('Article list found.');
  res.status(200).send(articles);
}

export async function getArticle(req, res) {
  const { articleId } = req.params;
  const article = await prisma.article.findFirstOrThrow({
    where: { id: articleId },
    include: { comments: true, updatedAt: false }
  });
  article.comments = article.comments.map(({ productId, updatedAt, ...rest }) => rest);
  console.log('Article found.');
  res.send(article);
}

export async function patchArticle(req, res) {
  const { articleId } = req.params;
  const data = req.body;
  //assert(data, PatchArticle);
  const article = await prisma.article.update({ where: { id: articleId }, data });
  console.log('Article updated.');
  res.status(201).send(article);
}

export async function deleteArticle(req, res) {
  const { articleId } = req.params;
  const article = await prisma.article.delete({ where: { id: articleId } });
  console.log('Article deleted.');
  res.status(201).send(article);
}

//------------------------------------------------- comments
export async function postArticleComment(req, res) {
  const { articleId } = req.params;
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
  article.comments = article.comments.map(({ productId, ...rest }) => rest);
  console.log('Comments updated');
  res.status(200).send(article);
}

export async function getArticleCommentList(req, res) {
  const { articleId } = req.params;
  const article = await prisma.article.findUniqueOrThrow({
    where: { id: articleId },
    select: { comments: true }
  });
  console.log('Comments retrieved.');
  res.status(200).send(article);
}

export async function deleteArticleCommentList(req, res) {
  const { articleId } = req.params;
  const article = await prisma.article.update({
    where: { id: articleId },
    data: { comments: { deleteMany: {} } },
    include: { comments: true }
  });
  console.log('Comments deleted.');
  res.status(201).send(article);
}

export async function deleteArticleComment(req, res) {
  const { articleId, commentId } = req.params;
  const article = await prisma.article.update({
    where: { id: articleId },
    data: { comments: { delete: { id: commentId } } },
    include: { comments: true }
  });
  console.log('1 comment deleted.');
  res.status(201).send(article);
}
