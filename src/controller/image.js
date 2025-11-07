import express from 'express';
import { PrismaClient } from '@prisma/client';

const app = express();
app.use(express.json());

const prisma = new PrismaClient();

export async function getProductImages(req, res) {
  const { id } = req.params;
  const product = await prisma.product.findUniqueOrThrow({
    where: { id },
    select: { imageUrls: true }
  });
  console.log('imageUrls retrieved');
  res.status(200).send(product);
}

export async function postProductImage(req, res) {
  const { id } = req.params;
  const { imageUrls } = req.body;
  const product = await prisma.product.findUnique({
    where: { id },
    select: { imageUrls: true }
  });

  const newImageUrl = req.file ? `/uploads/${req.file.filename}` : null;
  app.use('/uploads', express.static('uploads'));

  // 기존 이미지 + 새 이미지 합치기
  const updatedUrls = [...product.imageUrls, newImageUrl];

  // 업데이트
  const updated = await prisma.product.update({
    where: { id },
    data: { imageUrls: updatedUrls }
    //select: { imageUrls: true } // imageUrls만 보고 싶다면
  });
  console.log('imageUrls updated & stored in DB.');
  res.status(201).send(updated);
}

export async function deleteProductImages(req, res) {
  const { id } = req.params;
  const product = await prisma.product.update({
    where: { id },
    data: { imageUrls: [] }
  });
  console.log('imageUrls deleted.');
  res.status(201).send(product);
}
