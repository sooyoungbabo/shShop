import express from 'express';
import errHandler from '../middleware/errhandler.js';
import validate from '../middleware/validate.js';
import { CreateProduct, PatchProduct } from '../struct/structs.js';
import {
  postProduct,
  patchProduct,
  deleteProduct,
  getProduct,
  getProductList,
  deleteProductComment,
  deleteProductCommentList,
  getProductCommentList,
  postProductComment
} from '../controller/product.js';

const productRouter = express.Router();

productRouter.post('/', validate(CreateProduct), errHandler(postProduct));
productRouter.get('/', errHandler(getProductList));
productRouter.patch('/:productId', validate(PatchProduct), errHandler(patchProduct));
productRouter.delete('/:productId', errHandler(deleteProduct));
productRouter.get('/:productId', errHandler(getProduct));
productRouter.post('/:productId/comments', errHandler(postProductComment));
productRouter.get('/:productId/comments', errHandler(getProductCommentList));
productRouter.delete('/:productId/comments', errHandler(deleteProductCommentList));
productRouter.delete('/:productId/comments/:commentId', errHandler(deleteProductComment));

export default productRouter;
