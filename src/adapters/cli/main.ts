import "reflect-metadata"
import {container} from "../../infra/containers"
import { CreateRental } from "../../application/userCases/createRental/CreateRental"

async function main(){
    console.log("Aluguel via CLI")

const createRental = container.get<CreateRental>(CreateRental);
const car_valid_id = "carro-1";

const input ={
    id_user: `usuario_nº:${Math.floor(Math.random()*1000)}`,
    id_carro: car_valid_id,
    devolucao: new Date("2026-09-12")
}

console.log(`Usuário:${input.id_user}`)
console.log(`ID do Carro:${input.id_carro}`)
console.log(`Devolução:${input.devolucao}`)

try{
    const aluguel = await createRental.execute(input);
    console.log(`Alguel realizado:`)
    console.log(`Id: ${aluguel.rent_id}`)
    console.log(`Data inicio: ${aluguel.start_date}`)
    console.log(`Previsão de devolução: ${aluguel.expected_date}`)
} catch (error:any){console.log("Erro na execução", error.message)}
} main();