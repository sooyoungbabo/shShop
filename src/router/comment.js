import express from 'express';
import modelValidate from '../middleware/modelValidate.js';
import { CreateComment, PatchComment } from '../struct/structs.js';
import {
  postProductComment, // 특정 상품 댓글 등록
  postArticleComment, // 특정 게시물 댓글 등록
  patchComment, // 댓글 수정
  deleteComment, // 댓글 삭제
  getComment, // 댓글 조회
  getAllCommentList, // 모든 댓글 목록 조회
  getProductCommentList, // 모든 상품 댓글 목록 조회
  getArticleCommentList // 모든 게시물 댓글 목록 조회
} from '../controller/comment.js';

const commentRouter = express.Router();

commentRouter.post('/products/:productId', modelValidate(CreateComment), postProductComment);
commentRouter.post('/articles/:articleId', modelValidate(CreateComment), postArticleComment);
commentRouter.patch('/:commentId', modelValidate(PatchComment), patchComment);
commentRouter.delete('/:commentId', deleteComment);
commentRouter.get('/:commentId', getComment);
commentRouter.get('/', getAllCommentList);
commentRouter.get('/products', getProductCommentList);
commentRouter.get('/articles', getArticleCommentList);

export default commentRouter;
