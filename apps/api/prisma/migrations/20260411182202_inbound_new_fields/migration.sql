/*
  Warnings:

  - Added the required column `name` to the `inbounds` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "inbounds" ADD COLUMN     "enable" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "name" TEXT NOT NULL;
