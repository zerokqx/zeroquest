/*
  Warnings:

  - The required column `email` was added to the `subscribers` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- AlterTable
ALTER TABLE "subscribers" ADD COLUMN     "email" TEXT NOT NULL;
