class Character{
    name:string;
    health : number = 100
     

    constructor(name:string,hp:number){
       this.name = name;
       this.health = hp
      
    }

    getName(name:string):void{
        
    }

    reciveDamage(damage:number):void{
        this.health -= damage
        console.log("Damage :",damage +" " +" HP : ",this.health)
        if(this.health < 0){
            this.health = 0
           

        }

    }


    }

class Warrior extends Character{
    armor:number

    constructor(name:string,hp:number,armor:number){
        super(name,hp);
        
    }

    attack():void{
    
        }

    override reciveDamage(damage: number): void {
        let realDamage = damage - this.armor;
        if(realDamage < 0){
            realDamage = 0;
        }
        super.reciveDamage(realDamage);
    }
}
