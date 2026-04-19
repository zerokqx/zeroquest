-- AlterTable
ALTER TABLE "plans" ADD COLUMN     "discountedCount" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "is_discounted" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "is_special" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "pluses" TEXT;
