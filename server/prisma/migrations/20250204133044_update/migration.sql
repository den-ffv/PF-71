/*
  Warnings:

  - You are about to drop the column `createdAt` on the `about` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `about` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `autor` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `autor` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `category` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `category` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `contact` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `contact` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `note` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `note` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `portfolio_work` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `portfolio_work` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `technology` table. All the data in the column will be lost.
  - Made the column `description` on table `technology` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "about" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "is_active" BOOLEAN NOT NULL DEFAULT true,
ALTER COLUMN "summery" DROP NOT NULL;

-- AlterTable
ALTER TABLE "autor" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "firstname" DROP NOT NULL,
ALTER COLUMN "lastname" DROP NOT NULL;

-- AlterTable
ALTER TABLE "category" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "is_active" BOOLEAN NOT NULL DEFAULT true;

-- AlterTable
ALTER TABLE "contact" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "is_active" BOOLEAN NOT NULL DEFAULT true,
ALTER COLUMN "contact_url" DROP NOT NULL;

-- AlterTable
ALTER TABLE "note" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "is_active" BOOLEAN NOT NULL DEFAULT true;

-- AlterTable
ALTER TABLE "portfolio_work" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "is_active" BOOLEAN NOT NULL DEFAULT true;

-- AlterTable
ALTER TABLE "portfolio_work_to_technology" ADD COLUMN     "is_active" BOOLEAN NOT NULL DEFAULT true;

-- AlterTable
ALTER TABLE "technology" DROP COLUMN "createdAt",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "is_active" BOOLEAN NOT NULL DEFAULT true,
ALTER COLUMN "description" SET NOT NULL;
