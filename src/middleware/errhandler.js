import express from 'express';
import { Prisma } from '@prisma/client';

const app = express();
app.use(express.json());

export default function errHandler(handler) {
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
