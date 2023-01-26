import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  await prisma.list.create({
    data: 
      {
        task: "Lavar Louça",
        notes: "bem lavada",
        createdAt: new Date()
      }
  })

}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
