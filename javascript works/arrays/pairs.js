//
var arr=[1,2,3,4];

var element=6;
for(let num1 of arr){
    for(let num2 of arr){
        let total=num1+num2;
        if((element==total)&&(num1!=num2)){
            console.log("Pairs are", num1, num2);
        }
    }
}





