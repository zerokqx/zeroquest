/*
  Warnings:

  - The values [POLICY] on the enum `LegalDocumentType` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `ip` on the `legal_acceptances` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[version]` on the table `legal_documents` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "LegalDocumentType_new" AS ENUM ('PRIVACY', 'PUBLIC', 'TERMS');
ALTER TABLE "legal_documents" ALTER COLUMN "type" TYPE "LegalDocumentType_new" USING ("type"::text::"LegalDocumentType_new");
ALTER TYPE "LegalDocumentType" RENAME TO "LegalDocumentType_old";
ALTER TYPE "LegalDocumentType_new" RENAME TO "LegalDocumentType";
DROP TYPE "public"."LegalDocumentType_old";
COMMIT;

-- AlterTable
ALTER TABLE "legal_acceptances" DROP COLUMN "ip";

-- CreateIndex
CREATE UNIQUE INDEX "legal_documents_version_key" ON "legal_documents"("version");
