/*
  Warnings:

  - You are about to drop the `_PortfolioWorkToTechnology` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `about` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `autor` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `category` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `contact` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `note` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `portfolio_work` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `portfolio_work_to_technology` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `technology` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_PortfolioWorkToTechnology" DROP CONSTRAINT "_PortfolioWorkToTechnology_A_fkey";

-- DropForeignKey
ALTER TABLE "_PortfolioWorkToTechnology" DROP CONSTRAINT "_PortfolioWorkToTechnology_B_fkey";

-- DropForeignKey
ALTER TABLE "note" DROP CONSTRAINT "note_autor_id_fkey";

-- DropForeignKey
ALTER TABLE "portfolio_work" DROP CONSTRAINT "portfolio_work_category_id_fkey";

-- DropForeignKey
ALTER TABLE "portfolio_work_to_technology" DROP CONSTRAINT "portfolio_work_to_technology_portfolio_work_id_fkey";

-- DropForeignKey
ALTER TABLE "portfolio_work_to_technology" DROP CONSTRAINT "portfolio_work_to_technology_technology_id_fkey";

-- DropTable
DROP TABLE "_PortfolioWorkToTechnology";

-- DropTable
DROP TABLE "about";

-- DropTable
DROP TABLE "autor";

-- DropTable
DROP TABLE "category";

-- DropTable
DROP TABLE "contact";

-- DropTable
DROP TABLE "note";

-- DropTable
DROP TABLE "portfolio_work";

-- DropTable
DROP TABLE "portfolio_work_to_technology";

-- DropTable
DROP TABLE "technology";

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "login" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "home_data" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,

    CONSTRAINT "home_data_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "contact_data" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "home_data_id" TEXT NOT NULL,
    "is_active" BOOLEAN NOT NULL,

    CONSTRAINT "contact_data_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "experience_data" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "date_start" TIMESTAMP(3) NOT NULL,
    "date_end" TIMESTAMP(3) NOT NULL,
    "content" TEXT NOT NULL,
    "is_active" BOOLEAN NOT NULL,

    CONSTRAINT "experience_data_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "thoughts_data" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "content" TEXT NOT NULL,
    "is_active" BOOLEAN NOT NULL,
    "user_id" TEXT NOT NULL,

    CONSTRAINT "thoughts_data_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "project_data" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "content" TEXT NOT NULL,
    "is_active" BOOLEAN NOT NULL,
    "user_id" TEXT NOT NULL,

    CONSTRAINT "project_data_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_login_key" ON "users"("login");

-- AddForeignKey
ALTER TABLE "contact_data" ADD CONSTRAINT "contact_data_home_data_id_fkey" FOREIGN KEY ("home_data_id") REFERENCES "home_data"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "thoughts_data" ADD CONSTRAINT "thoughts_data_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "project_data" ADD CONSTRAINT "project_data_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
