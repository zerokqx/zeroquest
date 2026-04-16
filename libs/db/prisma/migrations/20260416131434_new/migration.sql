/*
  Warnings:

  - You are about to drop the column `frozen` on the `wallet` table. All the data in the column will be lost.

*/
-- AlterEnum
ALTER TYPE "WalletHistoryType" ADD VALUE 'REFUND';

-- AlterTable
ALTER TABLE "wallet" DROP COLUMN "frozen",
ADD COLUMN     "held" INTEGER NOT NULL DEFAULT 0;
