initializer.view.create={
    student:()=>{
        var submit=document.getElementById("submit");
        Student.loadall();
        submit.addEventListener('click',initializer.view.create.newstudent);
    },
    newstudent:()=>{
        var form=document.getElementById("form");
        var stu={
            name:form.name.value,
            age:form.age.value,
            sem:form.sem.value
        }
        Student.createstudent(stu);
        form.reset();
    }
};