export class Car {
    constructor(
        public readonly placa: string, 
        public readonly ano:number, 
        public readonly cor:string, 
        public isRented:boolean = false){}
}
