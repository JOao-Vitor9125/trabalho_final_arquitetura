import { Car } from "../entities/Car";

export interface ICarRepo{
    findById(id: string):Promise <Car|null>;
    updateAvailableRent(placa: string, isRented: boolean): Promise<void>;
    validateCar(id:string):Promise<boolean>;
}