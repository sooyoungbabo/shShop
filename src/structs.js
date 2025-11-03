import * as s from 'superstruct';
import isEmail from 'is-email';
import isUuid from 'is-uuid';

export const CreateProduct = s.object({
  name: s.string(),
  description: s.string(),
  price: s.min(s.number(), 0),
  tags: s.string()
});

export const PatchProduct = s.partial(CreateProduct);

export const CreateArticle = s.object({
  title: s.string(),
  content: s.string()
});

export const PatchArticle = s.partial(CreateArticle);
