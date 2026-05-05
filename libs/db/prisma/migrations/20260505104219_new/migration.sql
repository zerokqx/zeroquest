-- DropForeignKey
ALTER TABLE "legal_acceptances" DROP CONSTRAINT "legal_acceptances_user_id_fkey";

-- AddForeignKey
ALTER TABLE "legal_acceptances" ADD CONSTRAINT "legal_acceptances_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE CASCADE;
