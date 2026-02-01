-- CreateTable
CREATE TABLE "rents" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "carId" TEXT NOT NULL,
    "startDate" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "endDate" DATETIME,
    "car_placa" TEXT,
    CONSTRAINT "rents_carId_fkey" FOREIGN KEY ("carId") REFERENCES "cars" ("car_id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "cars" (
    "placa" TEXT NOT NULL,
    "car_id" TEXT NOT NULL PRIMARY KEY,
    "ano" INTEGER NOT NULL,
    "cor" TEXT NOT NULL,
    "rented" BOOLEAN NOT NULL DEFAULT false
);

-- CreateIndex
CREATE UNIQUE INDEX "cars_placa_key" ON "cars"("placa");
