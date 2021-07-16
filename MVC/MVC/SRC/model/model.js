class Student{
    constructor(name,age,sem){
        this.name=name,
        this.age=age,
        this.sem=sem
    }


    instances={};
    
    static loadall(){
        var currdata=JSON.parse(window.localStorage.getItem('student'));
        this.instances={...currdata};
        return currdata;
    }

    static createstudent({name,age,sem}){
        var newstud= new Student(name,age,sem);
        var newinstance={...this.instances};
        newinstance[`${name}`]=newstud;
        this.instances=newinstance;
        Student.save();
    }

    static save(){
        var datainlocalstorage=JSON.parse(window.localStorage.getItem('student'));
        var newdata=JSON.stringify({...this.instances,...datainlocalstorage});
        try{
            window.localStorage.setItem('student',newdata);
        }
        catch{
            throw Error("can not add to local storage");
        }
    }

    static saveall(){
        var students=JSON.stringify(this.instances);
        try{
            window.localStorage.setItem('student',students);
        }
        catch{
            throw Error("not possible");
        }
    }
    static delete(name){
        var delstudent=this.instances[name];
        if(delstudent){
            delete this.instances[delstudent.name]; 
            Student.saveall();
        }

    }

}