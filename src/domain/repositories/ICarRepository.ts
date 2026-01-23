import { Car } from "../entities/Car";

export interface ICarRepo{
    details():void;
    isRented(carro:Car):boolean;
}