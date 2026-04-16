-- AlterTable
ALTER TABLE "users" ALTER COLUMN "can_comment" SET DEFAULT true;

-- AlterTable
ALTER TABLE "wallet" ADD COLUMN     "frozen" BOOLEAN NOT NULL DEFAULT false;
