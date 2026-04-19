/*
  Warnings:

  - You are about to drop the column `discountedCount` on the `plans` table. All the data in the column will be lost.
  - You are about to drop the column `is_discounted` on the `plans` table. All the data in the column will be lost.
  - You are about to drop the column `pluses` on the `plans` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "plans" DROP COLUMN "discountedCount",
DROP COLUMN "is_discounted",
DROP COLUMN "pluses",
ADD COLUMN     "discountedPercent" DECIMAL(65,30) NOT NULL DEFAULT 0.0,
ADD COLUMN     "features" TEXT;
