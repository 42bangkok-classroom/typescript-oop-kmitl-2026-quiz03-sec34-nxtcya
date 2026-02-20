export class Car {
    brand?:string ;
    model?:string ;

    constructor(brand?:string,model?:string){
        this.brand = brand;
        this.model = model;
    }

    start():void{
        console.log("Toyota Camry is starting...")

    }
    accelerate():void{
        console.log("Toyota Camry is accelerating...")
    }
    brake():void{
        console.log("Toyota Camry is braking...")

    }
    stop():void{
        console.log("Toyota Camry is stopping...")
    }

}





