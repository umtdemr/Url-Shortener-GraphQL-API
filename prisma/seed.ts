import { PrismaClient, Prisma } from "@prisma/client";
import shortid from "shortid";


const prisma = new PrismaClient();

const urlData: Prisma.UrlDataCreateInput[] = [
  {
    url: 'https://google.com',
    shortId: shortid.generate()
  },
  {
    url: 'https://facebook.com',
    shortId: shortid.generate()
  },
  {
    url: 'https://twitter.com',
    shortId: shortid.generate()
  }
]


const main = async () => {
  console.log('starting seeding...')
  for (const modelData of urlData) {
    const dbData = await prisma.urlData.create({data: modelData});
    console.log(`Created ${dbData.url} with id: ${dbData.shortId}`);
  }
  console.log('finished seeding...');
}

main()
  .catch((err) => {
    console.log(`an error has occurred while seeding: ${err}`)
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect()
  })


