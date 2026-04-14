/*
  Warnings:

  - The values [DEPOSIT,REFUND,SUBSCRIBTION] on the enum `WalletHistoryType` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "WalletHistoryType_new" AS ENUM ('CREDIT', 'DEBIT', 'BONUS');
ALTER TABLE "WalletHistory" ALTER COLUMN "type" TYPE "WalletHistoryType_new" USING ("type"::text::"WalletHistoryType_new");
ALTER TYPE "WalletHistoryType" RENAME TO "WalletHistoryType_old";
ALTER TYPE "WalletHistoryType_new" RENAME TO "WalletHistoryType";
DROP TYPE "public"."WalletHistoryType_old";
COMMIT;
