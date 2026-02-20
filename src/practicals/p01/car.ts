export class Car {
    brand?:string ;
    model?:string ;

    constructor(brand?:string,model?:string){
        this.brand = brand;
        this.model = model;
    }

    start(){
        console.log("Toyota Camry is starting...")

    }
    accelerate(){
        console.log("Toyota Camry is accelerating...")
    }
    brake(){
        console.log("Toyota Camry is braking...")

    }
    stop(){
        console.log("Toyota Camry is stopping...")
    }

}





