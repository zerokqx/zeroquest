/*
  Warnings:

  - You are about to drop the column `subscribe_id` on the `refunds` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "refunds" DROP CONSTRAINT "refunds_subscribe_id_fkey";

-- AlterTable
ALTER TABLE "refunds" DROP COLUMN "subscribe_id";
