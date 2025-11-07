import { PrismaClient } from '@prisma/client';
import { PRODUCTS, ARTICLES, COMMENTS } from './mock.js';

const prisma = new PrismaClient();

async function main() {
  await prisma.comment.deleteMany();
  await prisma.product.deleteMany();
  await prisma.article.deleteMany();

  await prisma.product.createMany({ data: PRODUCTS, skipDuplicates: true });
  await prisma.article.createMany({ data: ARTICLES, skipDuplicates: true });
  await prisma.comment.createMany({ data: COMMENTS, skipDuplicates: true });
}

main()
  .then(async () => {
    await prisma.$disconnect(); // disconnect prisma connection to DB
  })
  .catch(async (error) => {
    console.log(error);
    await prisma.$disconnect();
    process.exit(1); // terminate the current node process (0: normal, 1: error)
  });
