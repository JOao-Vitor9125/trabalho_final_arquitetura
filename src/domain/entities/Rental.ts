
export class Rental{
    constructor(
        public readonly rent_id:string,
        public readonly tenant_id:string, 
        public readonly car_id:string,
        public readonly car_placa:string,
        public readonly start_date:Date,
        public readonly end_date?:Date|null
    ){}
}