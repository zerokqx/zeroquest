/*
  Warnings:

  - You are about to drop the column `owner_id` on the `subscribers` table. All the data in the column will be lost.
  - Added the required column `total_gb` to the `subscribers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `subscribers` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "subscribers" DROP CONSTRAINT "subscribers_owner_id_fkey";

-- AlterTable
ALTER TABLE "subscribers" DROP COLUMN "owner_id",
ADD COLUMN     "total_gb" INTEGER NOT NULL,
ADD COLUMN     "user_id" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "subscribers" ADD CONSTRAINT "subscribers_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
