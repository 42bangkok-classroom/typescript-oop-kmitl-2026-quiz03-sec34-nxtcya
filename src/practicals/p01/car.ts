export class Car {
    constructor(public brand?:string,public model?:string){}

        start(){
            console.log(`${this.brand} ${this.model} is starting...`);
        }
        accelerate(){
            console.log(`${this.brand} ${this.model} is accelerating...`);
        }
        brake(){
            console.log(`${this.brand} ${this.model} id bracking...`);
        }
        stop(){
            console.log(`${this.brand} ${this.model} id stopping...`);
        }
    
}





