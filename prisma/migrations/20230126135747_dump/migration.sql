-- CreateTable
CREATE TABLE "list" (
    "id" SERIAL NOT NULL,
    "task" TEXT NOT NULL,
    "notes" TEXT NOT NULL,
    "createdAt" DATE NOT NULL,

    CONSTRAINT "list_pkey" PRIMARY KEY ("id")
);
