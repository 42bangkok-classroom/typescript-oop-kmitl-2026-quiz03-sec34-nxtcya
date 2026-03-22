import { Character } from "./character";

export class Warrior extends Character {
  constructor(public name:string ,private weapon:string,health:number){
    super(name,health)
  }
  getWeapon(){
    return this.weapon
  }

  receiveDamage(damage: number): void {
    const reduceDamage = damage*0.5
    this.health -= reduceDamage;
    
  }
  
}

// 1. ต้อง `export class Character` และ `export class Warrior extends Character`
// 2. `Character` ต้องมี attribute `name` และ `health`
//    - `health` มีค่าเริ่มต้นเป็น 100
// 3. `Character` ต้องมี method:
//    - `getName()`
//    - `getHealth()`
//    - `receiveDamage(damage: number)`: ลดเลือดตาม damage ที่ได้รับ
// 4. `Warrior` ต้องมี constructor รับค่า `name`, `weapon` และ `health` (optional ใน parent แต่ warrior รับมา)
// 5. `Warrior` ต้องมี attribute `weapon` และ method `getWeapon()`
// 6. `Warrior` ต้อง override method `receiveDamage(damage: number)`
//    - ความสามารถพิเศษ: อ่านได้จากใน comment ของโค้ดไฟล์ index.ts
// 7. ห้ามใช้ `any`
// 8. ห้ามใช้ `console.log` ภายใน class