export class User {
    firstname:string;
    lastname:string;
    private _age:string;

    constructor(firstname:string,lastname:string,age:string){
        this.firstname = firstname;
        this.lastname = lastname;
        this._age = age;
    }

    setFirstname(){
        return this.firstname
    }

    setLastname(){
        return this.lastname
    }

    setAge(){
        return this._age
    }

    getFullName(fullname:string):string{
        return fullname = this.firstname + this.lastname
        
    }
}

