import express from 'express';
import errHandler from '../middlewares/errhandler.js';
import {
  deleteComment,
  getComment,
  getCommentList,
  patchComment,
  postArticleComment,
  postProductComment
} from '../controllers/comment.js';

const commentRouter = express.Router();

commentRouter.post('/articles/:id', errHandler(postArticleComment));
commentRouter.post('/products/:id', errHandler(postProductComment));
commentRouter.patch('/:id', errHandler(patchComment));
commentRouter.delete('/:id', errHandler(deleteComment));
commentRouter.get('/:id', errHandler(getComment));
commentRouter.get('/', errHandler(getCommentList));

export default commentRouter;
