class Student{
constructor (sId, sName) {
    this.id = sId;
    this.name = sName;
    this.school = "R.S.K.H School";
}
}
const student1 = new Student(12, "Shuvo");
const student2 = new Student(22, "Maria");
console.log(student1, student2);