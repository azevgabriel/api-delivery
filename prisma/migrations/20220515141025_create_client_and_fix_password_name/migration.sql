/*
  Warnings:

  - You are about to drop the column `passowrd` on the `deliveryman` table. All the data in the column will be lost.
  - Added the required column `password` to the `deliveryman` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "deliveryman" DROP COLUMN "passowrd",
ADD COLUMN     "password" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "clients" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "clients_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "clients_username_key" ON "clients"("username");
