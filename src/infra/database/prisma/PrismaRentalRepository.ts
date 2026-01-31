import { injectable } from "inversify";
import { PrismaClient } from "@prisma/client";
import { IRentRepo } from "../../../domain/repositories/IRentRepository";
import { Rental } from "../../../domain/entities/Rental";

const prisma = new PrismaClient()

@injectable()
export class PrismaRentalRespository implements IRentRepo{
    create(rental: Rental): void {
        prisma.rents.create({
            data: {
                userId: rental.tenant_id,
                carId: rental.car_id,
                car_placa: rental.car_placa,
                startDate: rental.start_date,
                endDate: rental.end_date??null,
                id: rental.rent_id!
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

    async validateTime(devolucao: Date): Promise<boolean> {
        const agora = new Date();
        const duracaoRent = devolucao.getTime() - agora.getTime();
        const duracaoMinima = 86400000;
        if(duracaoRent < duracaoMinima) return false
        
        return true;
        
    }
}