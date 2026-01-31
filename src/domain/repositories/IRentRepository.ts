import { Rental } from "../entities/Rental";

export interface IRentRepo{
    create(rental: Rental):void;
    findRentalByTenant(tenat_id:string):Promise <Rental | null>;
    validateTime(devolucao:Date):Promise<boolean>;
}

