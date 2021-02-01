class Parent {
    constructor (){
        this.fatherName = "Schwerggiger";
    }
}

class Child extends parent{
    constructor(name){
        super ();
        this.name= name;
        this.father= name;
    }
}
const baby = new Child ("Arnold");
const baby2 = new Child ("Tom Andy");
console.log(baby)
console.log(baby2);