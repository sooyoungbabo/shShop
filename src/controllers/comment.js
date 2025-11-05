import express from 'express';
import { PrismaClient } from '@prisma/client';
import { assert } from 'superstruct';
import cors from 'cors';
import { CreateProductComment } from '../structs/structs.js';
import { asyncHandler } from '../middlewares/errhandler.js';

const app = express();
app.use(express.json());
app.use(cors());

const commentRouter = express.Router();
const prisma = new PrismaClient();

productCommentRouter.route('/:productId/comments').post(
  asyncHandler(async (req, res) => {
    const { productId } = req.params;
    const { content } = req.body
    const data = { content, productId }
    assert(data, CreateComment);

    const comment = await prisma.comment.create({ data});
    res.status(201).send(comment);
  })
);

productCommentRouter
  .route('/:productId/comments/:commentId')
  .patch(
    asyncHandler(async (req, res) => {
      const { productId, commentId } = req.params;
      const { content } = req.body;
      const comment = await prisma.comment.update({
        where: { id: commentId },
        data: { content, productId }
      });
      res.status(201).send(comment);
    })
  );
  .delete(
    asyncHandler(async (req, res) => {
      const { id } = req.params;
      const comment = await prisma.comment.delete({ where: { id } });
      res.status(201).send('Comment deleted.');
    })
  )
  .get(async (req, res) => {
    const { id: productId } = req.params;
    const replies = await prisma.product.findUniqueOrThrow({
      where: { id: productId },
      select: { productReplies: true }
    });
    res.status(200).send(replies);
  })
  .get(async (req, res) => {
    // 댓글목록 조회
    const replies = await prisma.reply.findMany({
      select: { productReplies: true }
    });
    res.status(200).send(replies);
  });

const articleCommentRouter = express.Router();

articleCommentRouter.route('/:articleId/comments').post(
  asyncHandler(async (req, res) => {
    const { articleId } = req.params;
    const { content } = req.body
    const data = { content, articleId }
    assert(data, CreateComment);

    const comment = await prisma.comment.create({ data});
    res.status(201).send(comment);
  })
);

export default productCommentRouter;
