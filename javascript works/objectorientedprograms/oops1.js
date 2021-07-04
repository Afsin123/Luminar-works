//class  -- model or blue print
// object -- instance of class
// reference 

class Person{

    setPerson(nme,ag){
        this.name=nme;
        this.age=ag;
    }
    printPerson(){
        console.log("this.name"," this.age");
    }

}
// to create a new object
var obj=new Person()
obj.name="arun";
obj.setPerson("arun",25);
obj.printPerson;

var obj1=new Person()
obj1.setPerson("Jaya",27);
obj1.printPerson;
