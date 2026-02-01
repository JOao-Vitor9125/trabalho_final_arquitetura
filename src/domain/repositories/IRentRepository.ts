import { Rental } from "../entities/Rental";

export interface IRentRepo{
    create(rental: Rental):Promise<void>;
    findRentalByTenant(tenat_id:string):Promise <Rental | null>;
}

