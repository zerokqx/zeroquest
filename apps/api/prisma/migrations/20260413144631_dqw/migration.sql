/*
  Warnings:

  - A unique constraint covering the columns `[id,user_id]` on the table `payments` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id,user_id]` on the table `sessions` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id,user_id]` on the table `subscribers` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `updatedAt` to the `client_types` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "sessions" DROP CONSTRAINT "sessions_client_type_id_fkey";

-- AlterTable
ALTER TABLE "client_types" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "payments_id_user_id_key" ON "payments"("id", "user_id");

-- CreateIndex
CREATE UNIQUE INDEX "sessions_id_user_id_key" ON "sessions"("id", "user_id");

-- CreateIndex
CREATE UNIQUE INDEX "subscribers_id_user_id_key" ON "subscribers"("id", "user_id");

-- AddForeignKey
ALTER TABLE "sessions" ADD CONSTRAINT "sessions_client_type_id_fkey" FOREIGN KEY ("client_type_id") REFERENCES "client_types"("id") ON DELETE CASCADE ON UPDATE CASCADE;
