import express from 'express';
import multer from 'multer';
import errHandler from '../middleware/errhandler.js';
import { deleteProductImages, getProductImages, postProductImage } from '../controller/image.js';

const imageRouter = express.Router();
const upload = multer({ dest: 'uploads/' });

imageRouter.get('/products/:id', errHandler(getProductImages));
imageRouter.post('/products/:id', upload.single('image'), errHandler(postProductImage));
imageRouter.delete('/products/:id', errHandler(deleteProductImages));

export default imageRouter;
