//
class Student{

    setStudent(roll,nme,crse,tot){
        this.roll_number=roll;
        this.name=nme;
        this.course=crse;
        this.total=tot;

    }
    printStudent(){
        console.log(this.roll_number,this.name,this.course,this.total);
    }
}
var obj=new Student()
obj.setStudent(102,"ravi","CSE",585)
obj.printStudent();