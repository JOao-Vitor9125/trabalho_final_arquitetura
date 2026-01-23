import { Car } from "../entities/Car";

export interface IRentRepo{
    Rent(car:Car):boolean;
}