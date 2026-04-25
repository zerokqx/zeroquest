/*
  Warnings:

  - A unique constraint covering the columns `[idempotence_key]` on the table `payments` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `idempotence_key` to the `payments` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "payments" ADD COLUMN     "idempotence_key" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "payments_idempotence_key_key" ON "payments"("idempotence_key");
