import {Rental} from "../../../domain/entities/Rental";
import {IRentRepo} from "../../../domain/repositories/IRentRepository";


export class memoryPrismaRentalRespository implements IRentRepo{
    
    public alugueis:Rental[]=[];

    async create(rental: Rental): Promise<void> {
        this.alugueis.push(rental);
    }

    async findRentalByTenant(tenant_id: string): Promise <Rental | null>{
        const aluguelVigente = this.alugueis.find(r => r.tenant_id === tenant_id && !r.end_date)
        return aluguelVigente||null;
    }
}