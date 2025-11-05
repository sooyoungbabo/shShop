import express from 'express';
import errHandler from '../middlewares/errhandler.js';
import {
  deleteArticle,
  getArticle,
  getArticleList,
  patchArticle,
  postArticle,
  postComment,
  getCommentList,
  deleteCommentList
} from '../controllers/article.js';

const articleRouter = express.Router();

articleRouter.post('/', errHandler(postArticle));
articleRouter.get('/', errHandler(getArticleList));
articleRouter.patch('/:id', errHandler(patchArticle));
articleRouter.delete('/:id', errHandler(deleteArticle));
articleRouter.get('/:id', errHandler(getArticle));
articleRouter.post('/:id/comments', errHandler(postComment));
articleRouter.get('/:id/comments', errHandler(getCommentList));
articleRouter.delete('/:id/comments', errHandler(deleteCommentList));

export default articleRouter;
