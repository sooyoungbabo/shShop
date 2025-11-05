import express from 'express';
import { Prisma, PrismaClient } from '@prisma/client';
import { assert } from 'superstruct';
import { CreateImage } from '../structs/structs.js';

const app = express();
app.use(express.json());

const imageRouter = express.Router();
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

imageRouter
  .route('/')
  .post(
    asyncHandler(async (req, res) => {
      const data = req.body;
      assert(data, CreateImage);
      const image = await prisma.image.create({ data });
      res.send(image);
    })
  )
  .get(
    asyncHandler(async (req, res) => {
      const { offset = 0, limit = 0, order = 'recent' } = req.query;
      let orderBy;
      if (order !== 'recent') {
        orderBy = { createdAt: 'asc' };
      } else {
        orderBy = { createdAt: 'desc' };
      }

      const images = await prisma.image.findMany({
        orderBy,
        skip: parseInt(offset),
        take: parseInt(limit) || undefined
      });
      res.send(images);
    })
  );

imagetRouter
  .route('/:id')
  .get(
    asyncHandler(async (req, res) => {
      const { id } = req.params;
      const image = await prisma.image.findFirstOrThrow({
        where: { id }
      });
      res.send(image);
    })
  )
  .patch(
    asyncHandler(async (req, res) => {
      const { id } = req.params;
      const data = req.body;
      assert(data, PatchImage);
      const image = await prisma.image.update({ where: { id }, data });
      res.send(image);
    })
  )
  .delete(
    asyncHandler(async (req, res) => {
      const { id } = req.params;
      const image = await prisma.image.delete({ where: { id } });
      console.log('Image deleted.');
      res.send(image);
    })
  );

export default productRouter;
