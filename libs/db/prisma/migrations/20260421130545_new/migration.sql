/*
  Warnings:

  - You are about to drop the column `discountedPercent` on the `plans` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name]` on the table `subscribers` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateEnum
CREATE TYPE "LegalDocumentType" AS ENUM ('POLICY', 'TERMS');

-- AlterTable
ALTER TABLE "plans" DROP COLUMN "discountedPercent",
ADD COLUMN     "discounted_percent" DECIMAL(5,2) NOT NULL DEFAULT 0.0;

-- CreateTable
CREATE TABLE "legal_documents" (
    "id" SERIAL NOT NULL,
    "type" "LegalDocumentType" NOT NULL,
    "version" TEXT NOT NULL,
    "content" TEXT NOT NULL,

    CONSTRAINT "legal_documents_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "legal_acceptances" (
    "ip" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "legal_document_id" INTEGER NOT NULL,

    CONSTRAINT "legal_acceptances_pkey" PRIMARY KEY ("user_id","legal_document_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "subscribers_name_key" ON "subscribers"("name");

-- AddForeignKey
ALTER TABLE "legal_acceptances" ADD CONSTRAINT "legal_acceptances_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "legal_acceptances" ADD CONSTRAINT "legal_acceptances_legal_document_id_fkey" FOREIGN KEY ("legal_document_id") REFERENCES "legal_documents"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
