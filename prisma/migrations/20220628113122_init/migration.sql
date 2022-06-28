-- CreateTable
CREATE TABLE "UrlData" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "url" TEXT NOT NULL,
    "shortId" TEXT NOT NULL,

    CONSTRAINT "UrlData_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UrlData_shortId_key" ON "UrlData"("shortId");
