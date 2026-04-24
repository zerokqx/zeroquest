/*
  Warnings:

  - You are about to drop the column `userId` on the `wallet` table. All the data in the column will be lost.
  - You are about to drop the column `walletId` on the `wallet_history` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[wallet_id]` on the table `users` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `wallet_id` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `wallet_id` to the `wallet_history` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "wallet" DROP CONSTRAINT "wallet_userId_fkey";

-- DropForeignKey
ALTER TABLE "wallet_history" DROP CONSTRAINT "wallet_history_walletId_fkey";

-- DropIndex
DROP INDEX "wallet_userId_key";

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "wallet_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "wallet" DROP COLUMN "userId";

-- AlterTable
ALTER TABLE "wallet_history" DROP COLUMN "walletId",
ADD COLUMN     "wallet_id" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "users_wallet_id_key" ON "users"("wallet_id");

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_wallet_id_fkey" FOREIGN KEY ("wallet_id") REFERENCES "wallet"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "wallet_history" ADD CONSTRAINT "wallet_history_wallet_id_fkey" FOREIGN KEY ("wallet_id") REFERENCES "wallet"("id") ON DELETE CASCADE ON UPDATE CASCADE;
