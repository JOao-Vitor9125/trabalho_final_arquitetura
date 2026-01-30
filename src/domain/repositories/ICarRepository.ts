import { Car } from "../entities/Car";

export interface ICarRepo{
    details():void;
    findByLicensePlate(placa: string):Promise <Car|null>;
    isRented(carro:Car):boolean;
}