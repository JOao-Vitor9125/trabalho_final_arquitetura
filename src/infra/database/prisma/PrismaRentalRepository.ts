import { injectable, inject } from "inversify";
import { IRentRepo } from "../../../domain/repositories/IRentRepository";
import {Rental} from "../../../domain/entities/Rental";
import {PrismaClient} from "@prisma/client";
import {TYPES} from "../../../infra/containers/types";



@injectable()
export class PrismaRentalRespository implements IRentRepo{
    constructor(
        @inject(TYPES.PrismaCliente) private prisma:PrismaClient){}

    async create(rental: Rental): Promise<Rental> {
        const created = await this.prisma.rents.create({
            data: {
                userId: rental.tenant_id,
                carId: rental.car_id,
                car_placa: rental.car_placa,
                startDate: rental.start_date,
                expectedDate: rental.expectedDate,
                endDate: rental.end_date??null,
            }
        })
        return new Rental(
        created.userId, 
        created.carId, 
        created.car_placa!, 
        created.startDate, 
        created.expectedDate, 
        created.endDate, 
        created.id); 
    }

    async findRentalByTenant(tenant_id: string): Promise <Rental | null> {
        const agora = new Date();
        const rentalData = await this.prisma.rents.findFirst({
            where: {
                userId: tenant_id,
                endDate: null
            }
        });

        if (!rentalData) return null;

        return new Rental(
            rentalData.userId,
            rentalData.carId,
            rentalData.car_placa!,
            rentalData.startDate,
            rentalData.expectedDate,
            rentalData.endDate,
            rentalData.id
        )
    }
}