import { injectable } from "inversify";
import {ICarRepo} from "../repositories/ICarRepository";

@injectable()
export class Car implements ICarRepo{
    constructor(private placa: string, private ano:number, private cor:string, private rented:boolean){
        this.rented=false;
    }

    public details():void{
        console.log(`Placa: ${this.placa} | Ano: ${this.ano} | Cor: ${this.cor}`)
    }

    public isRented():boolean{
        if(this.rented === true) return true;

        return false;
    }
}
