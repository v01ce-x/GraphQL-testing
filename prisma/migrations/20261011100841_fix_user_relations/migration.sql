/*
  Warnings:

  - You are about to drop the column `userId` on the `experience` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `projects` table. All the data in the column will be lost.
  - You are about to drop the column `experience_id` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `project_id` on the `users` table. All the data in the column will be lost.
  - Added the required column `user_id` to the `experience` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `projects` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `projects` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "experience" DROP CONSTRAINT "experience_userId_fkey";

-- DropForeignKey
ALTER TABLE "projects" DROP CONSTRAINT "projects_userId_fkey";

-- AlterTable
ALTER TABLE "experience" DROP COLUMN "userId",
ADD COLUMN     "user_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "projects" DROP COLUMN "userId",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "user_id" TEXT NOT NULL,
ALTER COLUMN "linkGitHub" DROP NOT NULL,
ALTER COLUMN "linkGitHub" DROP DEFAULT,
ALTER COLUMN "linkWebSite" DROP NOT NULL,
ALTER COLUMN "linkWebSite" DROP DEFAULT;

-- AlterTable
ALTER TABLE "users" DROP COLUMN "experience_id",
DROP COLUMN "project_id";

-- AddForeignKey
ALTER TABLE "experience" ADD CONSTRAINT "experience_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "projects" ADD CONSTRAINT "projects_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
