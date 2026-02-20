export class Car {
    brand?:string ;
    model?:string ;

    constructor(brand?:string,model?:string){
        this.brand = brand;
        this.model = model;
    }

    start(){
        console.log(`${this.brand}${this.model} is starting...`);

    }
    accelerate(){
        console.log(`${this.brand}${this.model} is accelerating...`);
    }
    brake(){
        console.log(`${this.brand}${this.model} is braking...`);

    }
    stop(){
        console.log(`${this.brand}${this.model} is stopping...`);
    }

}





