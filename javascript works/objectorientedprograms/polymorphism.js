class Calculation{
    add(){
        console.log("first");
    }
    add(num1){
        console.log("second");
    }
    add(num1,num2){
        console.log("third");
    }
}
var obj = new Calculation();
obj.add();
obj.add(2);
obj.add(2,3);
