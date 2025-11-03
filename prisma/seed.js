import { PrismaClient } from '@prisma/client';
import { PRODUCTS } from './mock.js';

const prisma = new PrismaClient();

const newProducts = [];
for (let i = 0; i < PRODUCTS.length; i++) {
  let { id, name, description, category: tags, price } = PRODUCTS[i];
  newProducts.push({ id, name, description, tags, price });
}

async function main() {
  // delete pre-existing data & insert mock data
  //await prisma.article.deleteMany();
  //await prisma.article.createMany({ data: ARTICLES, skipDuplicates: true });

  await prisma.product.deleteMany();
  await prisma.product.createMany({ data: newProducts, skipDuplicates: true });
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
