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

    async createRent(id_user:string, id_carro:string, devolucao:Date):Promise<Rental>{
        const client_openRent = await this.rentRepo.findRentalByTenant(id_user);
        const validCar = await this.carRepo.validateCar(id_carro);

        const carro= await this.carRepo.findById(id_carro);
        if (!carro) throw new Error("Alerta! Carro não encontrado");

        const placa= carro.placa;

        const agora= new Date();
        const duracaoRent = devolucao.getTime() - agora.getTime();
        const duracaoMinima = 86400000;

        if(client_openRent !== null){
            throw new Error("Alerta! O Cliente tem um aluguel em aberto");
        }
        if(duracaoRent < duracaoMinima){
            throw new Error("Alerta! O período de aluguel deve ser de pelo menos 24 horas");
        }
        if(validCar=== false){
            throw new Error("Alerta! Carro já está alugado no momento");
        }

        const newRental= new Rental(id_user, id_carro, placa!, agora, devolucao);

        await this.rentRepo.create(newRental);

        this.carRepo.updateAvailableRent(placa, true);

        console.log("Aluguel registrado com sucesso");
        
        return newRental;
    }
        
        
}



