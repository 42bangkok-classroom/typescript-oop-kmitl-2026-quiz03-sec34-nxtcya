export class User {
    static BIRTH_YEAR:number = 0;
    constructor(public firstname?:string,public lastname?:string,private _age?:number){}
    setFirstname(x:string){
        if(!x) throw new Error(`Invalid`);
        this.firstname = x
    }
    setLastname(y:string){
        if(!y) throw new Error();
        this.lastname = y;
    }
    setAge(age:number){
        if(age < 0 ) throw new Error("invalid");
        this._age = age;
        
        const currentYear  = new Date().getFullYear();
        User.BIRTH_YEAR = currentYear - age;
    }
    getAge(){
        return this._age
    }
    getFullName(){
        return `${this.firstname} ${this.lastname} `  
    }


}