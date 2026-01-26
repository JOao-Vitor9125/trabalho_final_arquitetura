import { Rental } from "../entities/Rental";

export interface IRentRepo{
    create(rental: Rental):void;
    findRentalByTenant(tenat_id:string):Rental | null;
}

