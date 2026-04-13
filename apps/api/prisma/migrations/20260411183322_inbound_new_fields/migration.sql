/*
  Warnings:

  - You are about to drop the column `inboundId` on the `plans` table. All the data in the column will be lost.
  - Added the required column `durataton_days` to the `plans` table without a default value. This is not possible if the table is not empty.
  - Added the required column `inbound_id` to the `plans` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "plans" DROP CONSTRAINT "plans_inboundId_fkey";

-- AlterTable
ALTER TABLE "plans" DROP COLUMN "inboundId",
ADD COLUMN     "durataton_days" INTEGER NOT NULL,
ADD COLUMN     "inbound_id" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "plans" ADD CONSTRAINT "plans_inbound_id_fkey" FOREIGN KEY ("inbound_id") REFERENCES "inbounds"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
