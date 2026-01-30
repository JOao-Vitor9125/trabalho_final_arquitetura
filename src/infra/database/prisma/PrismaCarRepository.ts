import { injectable } from "inversify";
import { PrismaClient } from "@prisma/client";
import { ICarRepo } from "../../../domain/repositories/ICarRepository";
import { Car } from "../../../domain/entities/Car";

const prisma = new PrismaClient()

@injectable()
export class PrimaCarRepository implements ICarRepo{
     details(): void {
        console.log('Repositório de Carros');
    }


    async findByLicensePlate(placa: string): Promise< Car | null >{
        const carData = await prisma.cars.findUnique({
            where:{placa: placa}
        });

        if (!carData) return null;
        return new Car(carData.placa, carData.ano, carData.cor, !carData.rented);
    }

    updateAvailableRent(placa: string, isRented: boolean): void{
        const rentedStatus = isRented;

        prisma.cars.update({
            where:{placa: placa},
            data: {rented: rentedStatus}
        })
    }
    
    isRented(car: Car): boolean {
        return !car.isRented;
    }
}