/*
  Warnings:

  - Added the required column `confirmation_url` to the `payments` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "payments" ADD COLUMN     "confirmation_url" TEXT NOT NULL;
