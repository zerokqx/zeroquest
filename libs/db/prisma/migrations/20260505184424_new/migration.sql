/*
  Warnings:

  - Made the column `features` on table `plans` required. This step will fail if there are existing NULL values in that column.
  - Made the column `description` on table `plans` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "plans" ALTER COLUMN "features" SET NOT NULL,
ALTER COLUMN "features" SET DEFAULT '',
ALTER COLUMN "description" SET NOT NULL,
ALTER COLUMN "description" SET DEFAULT '',
ALTER COLUMN "durataton_days" SET DEFAULT 30;
