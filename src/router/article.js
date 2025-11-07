import express from 'express';
import errHandler from '../middleware/errhandler.js';
import { CreateArticle, PatchArticle } from '../struct/structs.js';
import validate from '../middleware/validate.js';
import {
  deleteArticle,
  getArticle,
  getArticleList,
  patchArticle,
  postArticle,
  postComment,
  getCommentList,
  deleteCommentList
} from '../controller/article.js';

const articleRouter = express.Router();

articleRouter.post('/', validate(CreateArticle), errHandler(postArticle));
articleRouter.get('/', errHandler(getArticleList));
articleRouter.patch('/:articleId', validate(PatchArticle), errHandler(patchArticle));
articleRouter.delete('/:articleId', errHandler(deleteArticle));
articleRouter.get('/:articleId', errHandler(getArticle));
articleRouter.post('/:articleId/comments', errHandler(postComment));
articleRouter.get('/:articleId/comments', errHandler(getCommentList));
articleRouter.delete('/:articleId/comments', errHandler(deleteCommentList));

export default articleRouter;
