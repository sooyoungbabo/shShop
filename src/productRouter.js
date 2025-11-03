import express from 'express';
import { Prisma, PrismaClient } from '@prisma/client';
import { assert } from 'superstruct';
import { CreateProduct, PatchProduct } from './structs.js';

const app = express();
app.use(express.json());

const productRouter = express.Router();
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

productRouter
  .route('/')
  .post(
    asyncHandler(async (req, res) => {
      const data = req.body;
      assert(data, CreateProduct);
      const product = await prisma.product.create({ data });
      res.send(product);
    })
  )
  .get(
    asyncHandler(async (req, res) => {
      const { offset = 0, limit = 0, order = 'recent', name, description } = req.query;
      let orderBy;
      if (order !== 'recent') {
        orderBy = { createdAt: 'asc' };
      } else {
        orderBy = { createdAt: 'desc' };
      }

      const products = await prisma.product.findMany({
        ///where: {name: {include}}
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
    })
  );

productRouter
  .route('/:id')
  .get(
    asyncHandler(async (req, res) => {
      const id = req.params.id;
      const product = await prisma.product.findFirstOrThrow({
        where: { id },
        // omit: {
        //   // doesn't work, why?
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
    })
  )
  .patch(
    asyncHandler(async (req, res) => {
      const { id } = req.params;
      const data = req.body;
      assert(data, PatchProduct);
      const product = await prisma.product.update({ where: { id }, data });
      res.send(product);
    })
  )
  .delete(
    asyncHandler(async (req, res) => {
      const id = req.params.id;
      const product = await prisma.product.delete({ where: { id } });
      console.log('Product deleted.');
      res.send(product);
    })
  );

export default productRouter;
