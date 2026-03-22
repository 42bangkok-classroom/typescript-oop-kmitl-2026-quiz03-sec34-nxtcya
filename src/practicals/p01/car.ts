export class Car {
    constructor(public brand?:string,public model?:string){}

        start(){
            console.log(`${this.brand} ${this.model} is stating...`);
        }
        accelerate(){
            console.log(`${this.brand} ${this.model} is acceleratiin...`);
        }
        brake(){
            console.log(`${this.brand} ${this.model} id brack...`);
        }
        stop(){
            console.log(`${this.brand} ${this.model} id stoping...`);
        }
    
}





