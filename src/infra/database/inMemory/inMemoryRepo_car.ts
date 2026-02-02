import {Car} from "../../../domain/entities/Car";
import {ICarRepo} from "../../../domain/repositories/ICarRepository";


export class memoryPrismaCarRepository implements ICarRepo{

    public carroTable:Car[]=[];

    async findById(id: string): Promise< Car | null >{

        for(let carData of this.carroTable){
            if(carData.car_id === id){
                return carData;
            }
        }
        return null;
    };

    async updateAvailableRent(placa: string, isRented: boolean): Promise<void>{
        const rentedStatus = isRented;

        for(let carData of this.carroTable){
            if(carData.placa === placa){
                carData.isRented = rentedStatus;
                break;
            }
        }

    }

    async validateCar(id: string): Promise<boolean> {
        const validCar = await this.findById(id);
        const indisponivel = validCar!.isRented;
        if(indisponivel || !validCar) return false;

        return true;
    }
}