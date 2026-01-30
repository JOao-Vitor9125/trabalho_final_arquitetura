import { injectable } from "inversify";
import { PrismaClient } from "@prisma/client";
import { IRentRepo } from "../../../domain/repositories/IRentRepository";
import { Rental } from "../../../domain/entities/Rental";
import { userInfo } from "node:os";

const prisma = new PrismaClient()

@injectable()
export class PrimaRentalRespository implements IRentRepo{
    create(rental: Rental): void {
        prisma.rents.create({
            data: {
                id: rental.rent_id,
                userId: rental.tenant_id,
                carId: rental.car_id,
                car_placa: rental.car_placa,
                startDate: rental.start_date,
                endDate: rental.end_date??null
            }
        })
    }

    async findRentalByTenant(tenat_id: string): Promise <Rental | null> {
        const rentalData = await prisma.rents.findFirst({
            where: {
                userId: tenat_id
            }
        });

        if (!rentalData) return null;

        return new Rental(
            rentalData.id,
            rentalData.userId,
            rentalData.carId,
            rentalData.car_placa,
            rentalData.startDate,
            rentalData.endDate,
        )
    }
}