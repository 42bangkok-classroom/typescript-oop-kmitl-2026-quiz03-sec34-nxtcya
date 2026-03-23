import { Character } from "./character";

export class Warrior extends Character {
  constructor(public name:string ,private weapon:string,public health:number){
    super(name,health ?? 100)
  }
  getWeapon(){
    return this.weapon
  }

  receiveDamage(damage: number): void {
    const reduceDamage = damage * 0.1
    this.health -= reduceDamage;

  }
  
}
