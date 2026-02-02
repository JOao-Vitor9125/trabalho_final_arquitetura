import {Rental} from "../../../domain/entities/Rental";
import {IRentRepo} from "../../../domain/repositories/IRentRepository";


export class memoryPrismaRentalRespository implements IRentRepo{
    
    public alugueis:Rental[]=[];

    async create(rental: Rental): Promise<void> {
        this.alugueis.push(rental);
    }

    async findRentalByTenant(tenant_id: string): Promise <Rental | null>{
        const agora = new Date();

        for(let rentalData of this.alugueis){
            if (rentalData.tenant_id === tenant_id){
                if (!rentalData.end_date || rentalData.end_date > agora){
                    return rentalData;
                }
            }
        }
        return null;
    }
}