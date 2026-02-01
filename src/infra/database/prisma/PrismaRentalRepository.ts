import { injectable } from "inversify";
import {prisma} from "./prismaCliente"
import { IRentRepo } from "../../../domain/repositories/IRentRepository";
import { Rental } from "../../../domain/entities/Rental";


@injectable()
export class PrismaRentalRespository implements IRentRepo{
    async create(rental: Rental): Promise<void> {
        await prisma.rents.create({
            data: {
                userId: rental.tenant_id,
                carId: rental.car_id,
                car_placa: rental.car_placa,
                startDate: rental.start_date,
                endDate: rental.end_date??null,
            }
        })
    }

    async findRentalByTenant(tenant_id: string): Promise <Rental | null> {
        const rentalData = await prisma.rents.findFirst({
            where: {
                userId: tenant_id, endDate: null
            }
        });

        if (!rentalData) return null;

        return new Rental(
            rentalData.userId,
            rentalData.carId,
            rentalData.car_placa!,
            rentalData.startDate,
            rentalData.endDate,
            rentalData.id
        )
    }
}