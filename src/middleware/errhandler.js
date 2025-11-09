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
            res.status(404).send('P2025: 해당 데이터를 찾을 수 없습니다.');
            break;
          case 'P2002':
            res.status(409).send('P2002: 이미 존재하는 항목입니다.');
            break;
          case 'P2005':
            res.status(400).send('P2005: Invalid value for field type');
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
