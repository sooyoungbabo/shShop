import express from 'express';
import cors from 'cors';
import productRouter from './router/product.js';
import articleRouter from './router/article.js';
import commentRouter from './router/comment.js';
import imageRouter from './router/image.js';
import { PORT } from './lib/constants.js';
import { prismaErrHandler } from './middleware/prismaErrHandler.js';
import errHandler2 from './middleware/errHandler2.js';
import routeErrHandler from './middleware/routeErrHandler.js';

const app = express();
app.use(express.json());
app.use(cors());

app.use('/products', productRouter);
app.use('/articles', articleRouter);
app.use('/comments', commentRouter);
app.use('/images', imageRouter);

app.use(prismaErrHandler); // 프리즈마 에러
app.use(routeErrHandler); // 경로 에러: 알아 차리기 힘들어서 추가
app.use(errHandler2); // Express 내부 에러

app.listen(PORT || 3000, () => console.log(`Server started`));
