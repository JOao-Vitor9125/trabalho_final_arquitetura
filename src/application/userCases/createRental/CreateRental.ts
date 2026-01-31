import {inject, injectable} from "inversify";
import { TYPES } from "../../../infra/containers/types";
import { ICarRepo } from "../../../domain/repositories/ICarRepository";
import { IRentRepo } from "../../../domain/repositories/IRentRepository";
import { Rental } from "../../../domain/entities/Rental";



@injectable()
export class CreateRental{
    constructor(
        @inject(TYPES.ICarRepo)
        private carRepo:ICarRepo,

        @inject(TYPES.IRentRepo)
        private rentRepo:IRentRepo
     ){}

    async createRent(id_user:string, id_carro:string, devolucao:Date){
        const client_openRent = await this.rentRepo.findRentalByTenant(id_user);
        const validPeriod = await this.rentRepo.validateTime(devolucao);
        const validCar = await this.carRepo.validateCar(id_carro);
        const carro= await this.carRepo.findById(id_carro);
        const placa= carro?.placa;
        const agora= new Date();
        
        if(client_openRent === null && validPeriod === true && validCar=== true){
            this.rentRepo.create(new Rental(id_user, id_carro, placa!, agora, devolucao));
            console.log("Aluguel registrado com sucesso");
        }else{
            throw new Error("Alguma das informações passadas é invalida");
        }
        
        
    }



}