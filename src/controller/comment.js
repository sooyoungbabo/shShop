import express from 'express';
import { PrismaClient } from '@prisma/client';
import { assert } from 'superstruct';
import cors from 'cors';
import { PatchComment } from '../struct/structs.js';

const app = express();
app.use(express.json());
app.use(cors());

const prisma = new PrismaClient();

// 상품 댓글 등록
// req.params에 commentId 있어야 함
// 입력 필드: content
// req.params에 productId 있어야 함
export async function postProductComment(req, res, next) {
  const { productId } = req.params;
  const { content } = req.body;
  req.body = { productId, content };
  //assert({ productId, content }, CreateComment);

  const contentArray = Array.isArray(content) ? content : [content];
  try {
    const product = await prisma.product.update({
      where: { id: productId },
      data: {
        comments: {
          create: contentArray.map((c) => ({ content: c }))
        }
      },
      include: { comments: true }
    });
    product.comments = product.comments.map(({ articleId, ...rest }) => rest); // articleId = null 가림
    console.log('Comments created.');
    res.status(200).send(product);
  } catch (err) {
    next(err);
  }
}

// 게시물 댓글 등록
// req.params에 commentId 있어야 함
// 입력 필드: content
// req.params에 articleId 있어야 함
export async function postArticleComment(req, res, next) {
  const { articleId } = req.params;
  const { content } = req.body;
  //assert({ articleId, content }, CreateComment);
  const contentArray = Array.isArray(content) ? content : [content];

  try {
    const article = await prisma.article.update({
      where: { id: articleId },
      data: {
        comments: {
          create: contentArray.map((c) => ({ content: c }))
        }
      },
      include: { comments: true }
    });
    article.comments = article.comments.map(({ productId, ...rest }) => rest); // pdoructId = null 가림
    console.log('Comments updated');
    res.status(200).send(article);
  } catch (err) {
    next(err);
  }
}

// 댓글 목록 조회
// 페이지네이션: cursor 기반 (default: limit=10)
// 조회순: id 오름순으로 고정
// 조건 검색: content에 포함된 단어
export async function getAllCommentList(req, res, next) {
  const { limit, cursor, content } = req.query;

  console.log(`cursor, before: ${cursor}`);

  try {
    const comments = await prisma.comment.findMany({
      skip: cursor ? 1 : 0, // 첫 검색 0, 이후 1
      take: parseInt(limit) || 10, // 페이지 사이즈는 조정 가능 (default 10)
      cursor: cursor ? { id: cursor } : undefined, // 첫 검색 undefined, 이후 전 검색의 최종 id
      where: { content: { contains: content } }, // content에 포함된 단어로 조건 검색
      orderBy: { id: 'asc' } // 조회순: id 오름순으로 고정
    });

    const nextCursor = comments.length > 0 ? comments[comments.length - 1].id : null;
    console.log(`cursor, after:  ${nextCursor}`);

    console.log('Comment list retrieved.');
    console.log('');
    res.status(200).send({ comments, nextCursor });
  } catch (err) {
    next(err);
  }
}

// 중고마켓 댓글 목록 조회
// 페이지네이션: cursor 기반 (default: limit=10)
// 조회순: id 오름순으로 고정
// 조건 검색: content에 포함된 단어
export async function getProductCommentList(req, res, next) {
  const { limit, cursor, content } = req.query;

  console.log(`cursor, before: ${cursor}`);

  try {
    const comments = await prisma.comment.findMany({
      skip: cursor ? 1 : 0, // 첫 검색 0, 이후 1
      take: parseInt(limit) || 10, // 페이지 사이즈는 조정 가능 (default 10)
      cursor: cursor ? { id: cursor } : undefined, // 첫 검색 undefined, 이후 전 검색의 최종 id
      where: { articleId: null, content: { contains: content } }, // content에 포함된 단어로 조건 검색
      orderBy: { id: 'asc' }, // 조회순: id 오름순으로 고정
      include: { articleId: false, updatedAt: false } // articleId = null 숨김
    });

    const nextCursor = comments.length > 0 ? comments[comments.length - 1].id : null;
    console.log(`cursor, after:  ${nextCursor}`);

    console.log('Product comment list retrieved.');
    console.log('');
    res.status(200).send({ comments, nextCursor });
  } catch (err) {
    next(err);
  }
}

// 자유게시판 댓글 목록 조회
// 페이지네이션: cursor 기반 (default: limit=10)
// 조회순: id 오름순으로 고정
// 조건 검색: content에 포함된 단어
export async function getArticleCommentList(req, res, next) {
  const { limit = 0, cursor, content } = req.query;

  console.log(`cursor, before: ${cursor}`);

  try {
    const comments = await prisma.comment.findMany({
      skip: cursor ? 1 : 0, // 첫 검색 0, 이후 1
      take: parseInt(limit) || 10, // 페이지 사이즈는 조정 가능 (default 10)
      cursor: cursor ? { id: cursor } : undefined, // 첫 검색 undefined, 이후 전 검색의 최종 id
      where: { productId: null, content: { contains: content } }, // content에 포함된 단어로 조건 검색
      orderBy: { id: 'asc' }, // 조회순: id 오름순으로 고정
      include: { productId: false, updatedAt: false } //productId = null 숨김
    });

    const nextCursor = comments.length > 0 ? comments[comments.length - 1].id : null;
    console.log(`cursor, after:  ${nextCursor}`);

    console.log('Article comment list retrieved.');
    console.log('');
    res.status(200).send({ comments, nextCursor });
  } catch (err) {
    next(err);
  }
}

// 1개 댓글 조회
export async function getComment(req, res, next) {
  const { commentId: id } = req.params;

  try {
    const comment = await prisma.comment.findUniqueOrThrow({
      where: { id }
    });
    console.log('Comments retrieved.');
    res.status(200).send(comment);
  } catch (err) {
    next(err);
  }
}

// 1개 댓글 수정
// req.params에 commentId 있어야 함
// 입력 필드: content
export async function patchComment(req, res, next) {
  const { commentId: id } = req.params;
  //assert(req.body, PatchComment);

  try {
    const comment = await prisma.comment.update({
      where: { id },
      data: req.body
    });
    console.log('Comments edited.');
    res.status(201).send(comment);
  } catch (err) {
    next(err);
  }
}

// 1개 댓글 삭제
// req.params에 commentId 있어야 함
export async function deleteComment(req, res, next) {
  const { commentId: id } = req.params;
  try {
    const comment = await prisma.comment.delete({ where: { id } });
    console.log('Comment deleted.');
    res.status(201).send('Comment deleted.');
  } catch (err) {
    next(err);
  }
}
