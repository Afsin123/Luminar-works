//
var arr=[3000,2000,4000,8000];

var minexp=arr[0];  //0

for(let exp of arr){
    if(exp<minexp){    
        minexp=exp;   
    }
}
console.log(minexp);