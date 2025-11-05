import express from 'express';
import cors from 'cors';
import productRouter from './routers/product.js';
import articleRouter from './routers/article.js';
// import commentRouter from './controllers/comment.js';
// import commentRouter from './controllers/image.js';

const app = express();
app.use(express.json());
app.use(cors());

app.use('/products', productRouter);
app.use('/articles', articleRouter);
// app.use('/comment', commentRouter);
// app.use('/image', imageRouter);

app.listen(3001, () => console.log(`Server_3001 started`));
