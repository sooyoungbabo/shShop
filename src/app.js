import express from 'express';
import cors from 'cors';
import productRouter from './router/product.js';
import articleRouter from './router/article.js';
import commentRouter from './router/comment.js';
import imageRouter from './router/image.js';
import { PORT } from './lib/constants.js';

const app = express();
app.use(express.json());
app.use(cors());

app.use('/products', productRouter);
app.use('/articles', articleRouter);
app.use('/comments', commentRouter);
app.use('/images', imageRouter);

app.listen(PORT || 3000, () => console.log(`Server started`));
