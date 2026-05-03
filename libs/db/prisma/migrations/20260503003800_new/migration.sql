/*
  Warnings:

  - You are about to drop the column `as_domain` on the `ip` table. All the data in the column will be lost.
  - You are about to drop the column `as_name` on the `ip` table. All the data in the column will be lost.
  - You are about to drop the column `asn` on the `ip` table. All the data in the column will be lost.
  - You are about to drop the column `country_code` on the `ip` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `ip` table. All the data in the column will be lost.
  - Added the required column `area` to the `ip` table without a default value. This is not possible if the table is not empty.
  - Added the required column `city` to the `ip` table without a default value. This is not possible if the table is not empty.
  - Added the required column `country` to the `ip` table without a default value. This is not possible if the table is not empty.
  - Added the required column `eu` to the `ip` table without a default value. This is not possible if the table is not empty.
  - Added the required column `metro` to the `ip` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rangeHigh` to the `ip` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rangeLow` to the `ip` table without a default value. This is not possible if the table is not empty.
  - Added the required column `region` to the `ip` table without a default value. This is not possible if the table is not empty.
  - Added the required column `timezone` to the `ip` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `ip` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ip" DROP COLUMN "as_domain",
DROP COLUMN "as_name",
DROP COLUMN "asn",
DROP COLUMN "country_code",
DROP COLUMN "status",
ADD COLUMN     "area" INTEGER NOT NULL,
ADD COLUMN     "city" TEXT NOT NULL,
ADD COLUMN     "country" TEXT NOT NULL,
ADD COLUMN     "eu" BOOLEAN NOT NULL,
ADD COLUMN     "ll" DECIMAL(9,6)[],
ADD COLUMN     "metro" INTEGER NOT NULL,
ADD COLUMN     "rangeHigh" INTEGER NOT NULL,
ADD COLUMN     "rangeLow" INTEGER NOT NULL,
ADD COLUMN     "region" TEXT NOT NULL,
ADD COLUMN     "timezone" TEXT NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;
