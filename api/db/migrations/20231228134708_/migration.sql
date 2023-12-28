/*
  Warnings:

  - Changed the type of `publicKey` on the `UserCredential` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "UserCredential" DROP COLUMN "publicKey",
ADD COLUMN     "publicKey" BYTEA NOT NULL;
