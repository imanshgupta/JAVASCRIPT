initializer.view.delete={
    student:()=>{
        var currdata=Student.loadall();
        var select=document.getElementById('selectbook');
        var delbtn=document.getElementById('commit');
        var keys=Object.keys(currdata);
        for(i in keys){
            var a=keys[i];
            const student=currdata[a];
            const option=document.createElement('option');
            option.text=student.name;
            option.value=student.name;
            select.add(option,null);
        
        }
        delbtn.addEventListener('click',initializer.view.delete.deletestudent);
    },
    deletestudent:()=>{
        var select=document.getElementById("selectbook");
        studentname=select.value;
       
        if(studentname){
            Student.delete(studentname);
            select.remove(select.selectedIndex);
        }
        var form=document.getElementById('form').reset();
    }
}