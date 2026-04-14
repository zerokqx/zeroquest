/*
  Warnings:

  - You are about to drop the column `nextPaymentDate` on the `Wallet` table. All the data in the column will be lost.
  - Added the required column `type` to the `WalletHistory` table without a default value. This is not possible if the table is not empty.
  - Added the required column `next_payment_date` to the `subscribers` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Wallet" DROP COLUMN "nextPaymentDate",
ALTER COLUMN "balance" SET DEFAULT 0;

-- AlterTable
ALTER TABLE "WalletHistory" ADD COLUMN     "type" "WalletHistoryType" NOT NULL;

-- AlterTable
ALTER TABLE "subscribers" ADD COLUMN     "next_payment_date" TIMESTAMP(3) NOT NULL;
