import * as s from 'superstruct';
import isUuid from 'is-uuid';

export const CreateProduct = s.object({
  name: s.string(),
  description: s.string(),
  price: s.min(s.number(), 0),
  tags: s.array(s.string()),
  imageUrls: s.optional(s.array())
});

export const PatchProduct = s.partial(CreateProduct);

export const CreateArticle = s.object({
  title: s.string(),
  content: s.string()
});

export const PatchArticle = s.partial(CreateArticle);

export const CreateComment = s.object({
  content: s.string(),
  productId: s.optional(s.define('Uuid', (value) => isUuid.v4(value))),
  articleId: s.optional(s.define('Uuid', (value) => isUuid.v4(value)))
});

// export const checkComment = s.refine(CreateComment, 'ValidComment', (value) => {
//   const hasContent = value.content.trim() !== '';
//   const hasProduct = typeof value.productId === 'string' && isUUID(value.productId);
//   const hasArticle = typeof value.articleId === 'string' && isUUID(value.articleId);
//   return hasContent && hasProduct !== hasArticle;
// });
export const PatchComment = s.partial(CreateComment);
