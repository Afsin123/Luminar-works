//full pyramid
//    *
//   ***
//  *****
// *******
var str="";

for(let row=1;row<=5;row++){
    for(let space=5-row;space>=1;space--){
        str+="  ";
    }

    
    for(let star=1;star<=5;star++){
        str+="* ";
    }
}
console.log(str);


