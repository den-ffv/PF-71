-- CreateTable
CREATE TABLE "autor" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "firstname" TEXT NOT NULL,
    "lastname" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "autor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "note" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "autor_id" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "note_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "about" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "summery" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "image_url" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "about_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "contact" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "contact_url" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "contact_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "portfolio_work" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "image_url" TEXT,
    "project_url" TEXT,
    "category_id" INTEGER,
    "date_completed" TIMESTAMP(3),
    "is_featured" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "portfolio_work_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "category" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "technology" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "logo_url" TEXT,
    "description" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "technology_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "portfolio_work_to_technology" (
    "id" SERIAL NOT NULL,
    "portfolio_work_id" INTEGER NOT NULL,
    "technology_id" INTEGER NOT NULL,

    CONSTRAINT "portfolio_work_to_technology_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_PortfolioWorkToTechnology" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "autor_email_key" ON "autor"("email");

-- CreateIndex
CREATE UNIQUE INDEX "technology_name_key" ON "technology"("name");

-- CreateIndex
CREATE UNIQUE INDEX "_PortfolioWorkToTechnology_AB_unique" ON "_PortfolioWorkToTechnology"("A", "B");

-- CreateIndex
CREATE INDEX "_PortfolioWorkToTechnology_B_index" ON "_PortfolioWorkToTechnology"("B");

-- AddForeignKey
ALTER TABLE "note" ADD CONSTRAINT "note_autor_id_fkey" FOREIGN KEY ("autor_id") REFERENCES "autor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "portfolio_work" ADD CONSTRAINT "portfolio_work_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "category"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "portfolio_work_to_technology" ADD CONSTRAINT "portfolio_work_to_technology_portfolio_work_id_fkey" FOREIGN KEY ("portfolio_work_id") REFERENCES "portfolio_work"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "portfolio_work_to_technology" ADD CONSTRAINT "portfolio_work_to_technology_technology_id_fkey" FOREIGN KEY ("technology_id") REFERENCES "technology"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PortfolioWorkToTechnology" ADD CONSTRAINT "_PortfolioWorkToTechnology_A_fkey" FOREIGN KEY ("A") REFERENCES "portfolio_work"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PortfolioWorkToTechnology" ADD CONSTRAINT "_PortfolioWorkToTechnology_B_fkey" FOREIGN KEY ("B") REFERENCES "technology"("id") ON DELETE CASCADE ON UPDATE CASCADE;
