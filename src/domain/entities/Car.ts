export class Car {
    constructor(
        public readonly placa: string, 
        public readonly ano:number, 
        public readonly cor:string, 
        public isRented:boolean = false){}

    markAsRented(){
        if(this.isRented = true){
            throw new Error (`O carro está alugado`)
        }
        this.isRented=true;
    }
}
