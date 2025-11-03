import express from 'express';
import productRouter from './productRouter.js';
import articleRouter from './ArticleRouter.js';

const app = express();
app.use(express.json());
app.use('/products', productRouter);
app.use('/articles', articleRouter);

app.listen(3001, () => console.log(`Server_3000 started`));
