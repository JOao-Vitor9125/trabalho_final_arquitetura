import "reflect-metadata"
import {container} from "../../infra/containers"
import { CreateRental } from "../../application/userCases/createRental/CreateRental"

async function main(){
    console.log("Alguel via CLI")
}

const createRental = container.get<CreateRental>(CreateRental);
const car_valid_id = ""