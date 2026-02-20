export class Character {
    name?:string;
    health:number = 100;

    constructor(name?:string,health:number){
        this.name = name;
        this.health = health;

    }

    getName();
}
