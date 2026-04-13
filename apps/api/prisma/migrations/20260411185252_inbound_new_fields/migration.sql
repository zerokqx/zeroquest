/*
  Warnings:

  - A unique constraint covering the columns `[inbount_id]` on the table `inbounds` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "inbounds_inbount_id_key" ON "inbounds"("inbount_id");
