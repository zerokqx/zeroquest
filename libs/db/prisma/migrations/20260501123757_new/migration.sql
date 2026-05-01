/*
  Warnings:

  - Added the required column `access_token_jti` to the `sessions` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "sessions" ADD COLUMN     "access_token_jti" TEXT NOT NULL;
