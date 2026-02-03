export class Rental{
    constructor(
        public readonly tenant_id:string, 
        public readonly car_id:string,
        public readonly car_placa:string,
        public readonly start_date:Date,
        public readonly expectedDate:Date,
        public readonly end_date?:Date|null,
        public rent_id?:string,
    ){}
}