import express from 'express';
import errHandler from '../middlewares/errhandler.js';
import {
  postProduct,
  patchProduct,
  deleteProduct,
  getProduct,
  getProductList,
  postComment,
  getCommentList,
  deleteCommentList
} from '../controllers/product.js';

const productRouter = express.Router();

productRouter.post('/', errHandler(postProduct));
productRouter.get('/', errHandler(getProductList));
productRouter.patch('/:id', errHandler(patchProduct));
productRouter.delete('/:id', errHandler(deleteProduct));
productRouter.get('/:id', errHandler(getProduct));
productRouter.post('/:id/comments', errHandler(postComment));
productRouter.get('/:id/comments', errHandler(getCommentList));
productRouter.delete('/:id/comments', errHandler(deleteCommentList));

export default productRouter;
