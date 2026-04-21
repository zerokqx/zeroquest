/*
  Warnings:

  - The `version` column on the `legal_documents` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- DropIndex
DROP INDEX "legal_documents_version_key";

-- AlterTable
ALTER TABLE "legal_documents" DROP COLUMN "version",
ADD COLUMN     "version" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
