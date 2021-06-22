class Student{
    constructor(firstname,lastmname,age){
        this.firstname=firstname;
        this.lastmname=lastmname;
        this.age=age;
    }

    printStudent(){
        return {
            firstName:this.firstname,
            lastName:this.lastmname,
            age:this.age
        }
    }
}