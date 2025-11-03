import express from 'express';
import { Prisma, PrismaClient } from '@prisma/client';
import { assert } from 'superstruct';
import { CreateArticle, PatchArticle } from './structs.js';

const app = express();
app.use(express.json());

const articleRouter = express.Router();
const prisma = new PrismaClient();

function asyncHandler(handler) {
  return async function (req, res) {
    try {
      await handler(req, res);
    } catch (e) {
      console.error(e);
      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        switch (e.code) {
          case 'P2025':
            res.status(404).send('Not found');
            break;
          case 'P2002':
            res.status(400).send('Unique constraint failed');
            break;
          default:
            res.status(500).send(e.message);
        }
      }
      if (e.name === 'StructError') {
        res.status(400).send(e.message);
      }
    }
  };
}
// title, content에 포함된 단어로 검색 가능
articleRouter
  .route('/')
  .post(
    asyncHandler(async (req, res) => {
      const data = req.body;
      assert(data, CreateArticle);
      const article = await prisma.article.create({ data });
      res.send(article);
    })
  )
  .get(
    asyncHandler(async (req, res) => {
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
        //omit: { updatedAt: true }
        select: {
          id: true,
          title: true,
          content: true,
          createdAt: true
        }
      });
      res.send(articles);
    })
  );

articleRouter
  .route('/:id')
  .get(
    asyncHandler(async (req, res) => {
      const id = req.params.id;
      const article = await prisma.article.findFirstOrThrow({
        where: { id },
        select: {
          id: true,
          title: true,
          content: true,
          createdAt: true
        }
      });
      res.send(article);
    })
  )
  .patch(
    asyncHandler(async (req, res) => {
      const { id } = req.params;
      const data = req.body;
      assert(data, PatchArticle);
      const article = await prisma.article.update({ where: { id }, data });
      res.send(article);
    })
  )
  .delete(
    asyncHandler(async (req, res) => {
      const id = req.params.id;
      const article = await prisma.article.delete({ where: { id } });
      console.log('Article deleted.');
      res.send(article);
    })
  );

export default articleRouter;
