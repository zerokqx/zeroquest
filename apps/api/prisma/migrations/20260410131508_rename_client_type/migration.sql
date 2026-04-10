/*
  Warnings:

  - You are about to drop the column `user_agent` on the `sessions` table. All the data in the column will be lost.
  - You are about to drop the `ClientType` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `user_agent_hash` to the `sessions` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "sessions" DROP CONSTRAINT "sessions_client_type_id_fkey";

-- AlterTable
ALTER TABLE "sessions" DROP COLUMN "user_agent",
ADD COLUMN     "user_agent_hash" TEXT NOT NULL;

-- DropTable
DROP TABLE "ClientType";

-- CreateTable
CREATE TABLE "client_types" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "client_types_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "inbounds" (
    "id" SERIAL NOT NULL,
    "inbount_id" INTEGER NOT NULL,

    CONSTRAINT "inbounds_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "client_types_name_key" ON "client_types"("name");

-- AddForeignKey
ALTER TABLE "sessions" ADD CONSTRAINT "sessions_client_type_id_fkey" FOREIGN KEY ("client_type_id") REFERENCES "client_types"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
