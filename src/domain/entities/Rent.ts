import {IRentRepo} from "../repositories/IRentRepository";
import {Car} from "./Car";
import {injectable} from "inversify";

@injectable()
export class Rental implements IRentRepo{
    constructor(private rent_id:string, private car:Car | null){
        this.car=null;
    }

    Rent(car:Car): boolean {
        if(!car.isRented()){
            return true;
        }
        console.log("Carro já está alugado");
        return false;
    }
}