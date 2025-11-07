import express from 'express';
import errHandler from '../middleware/errhandler.js';
import {
  deleteComment,
  getComment,
  getCommentList,
  patchComment,
  postArticleComment,
  postProductComment
} from '../controller/comment.js';

const commentRouter = express.Router();

commentRouter.post('/articles/:articleId', errHandler(postArticleComment));
commentRouter.post('/products/:productId', errHandler(postProductComment));
commentRouter.patch('/:commentId', errHandler(patchComment));
commentRouter.delete('/:commentId', errHandler(deleteComment));
commentRouter.get('/:commentId', errHandler(getComment));
commentRouter.get('/', errHandler(getCommentList));

export default commentRouter;
