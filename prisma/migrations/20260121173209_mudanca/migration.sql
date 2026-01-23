/*
  Warnings:

  - You are about to drop the column `rent_id` on the `cars` table. All the data in the column will be lost.
  - Added the required column `car_placa` to the `rents` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_cars" (
    "placa" TEXT NOT NULL,
    "ano" INTEGER NOT NULL,
    "cor" TEXT NOT NULL,
    "rented" BOOLEAN NOT NULL
);
INSERT INTO "new_cars" ("ano", "cor", "placa", "rented") SELECT "ano", "cor", "placa", "rented" FROM "cars";
DROP TABLE "cars";
ALTER TABLE "new_cars" RENAME TO "cars";
CREATE UNIQUE INDEX "cars_placa_key" ON "cars"("placa");
CREATE TABLE "new_rents" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "data_in" DATETIME NOT NULL,
    "data_out" DATETIME NOT NULL,
    "car_placa" TEXT NOT NULL,
    CONSTRAINT "rents_car_placa_fkey" FOREIGN KEY ("car_placa") REFERENCES "cars" ("placa") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_rents" ("data_in", "data_out", "id") SELECT "data_in", "data_out", "id" FROM "rents";
DROP TABLE "rents";
ALTER TABLE "new_rents" RENAME TO "rents";
CREATE UNIQUE INDEX "rents_car_placa_key" ON "rents"("car_placa");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
