import { injectable } from "inversify";
import { PrismaClient } from "@prisma/client";
import { ICarRepo } from "../../../domain/repositories/ICarRepository";
import { Car } from "../../../domain/entities/Car";

const prisma = new PrismaClient()

@injectable()
export class PrismaCarRepository implements ICarRepo{
    async findById(id: string): Promise< Car | null >{
        const carData = await prisma.cars.findUnique({
            where:{car_id: id}
        });

        if (!carData) return null;
        return new Car(carData.placa, carData.ano, carData.cor, carData.rented);
    }

    async updateAvailableRent(placa: string, isRented: boolean): Promise<void>{
        const rentedStatus = isRented;

        prisma.cars.update({
            where:{placa: placa},
            data: {rented: rentedStatus}
        })
    }
    async validateCar(id: string): Promise<boolean> {
        const validCar = await this.findById(id);
        const indisponivel = validCar?.isRented;
        if(indisponivel) return false;

        return true;

    }
}