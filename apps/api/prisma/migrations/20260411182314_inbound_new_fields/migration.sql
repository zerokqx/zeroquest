/*
  Warnings:

  - Added the required column `inboundId` to the `plans` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "plans" ADD COLUMN     "inboundId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "plans" ADD CONSTRAINT "plans_inboundId_fkey" FOREIGN KEY ("inboundId") REFERENCES "inbounds"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
