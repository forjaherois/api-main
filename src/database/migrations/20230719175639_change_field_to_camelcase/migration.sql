/*
  Warnings:

  - You are about to drop the column `is_confirmed` on the `accounts` table. All the data in the column will be lost.
  - Added the required column `isConfirmed` to the `accounts` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "accounts" DROP COLUMN "is_confirmed",
ADD COLUMN     "isConfirmed" BOOLEAN NOT NULL;
