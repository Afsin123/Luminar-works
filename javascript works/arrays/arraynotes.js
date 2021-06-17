
var expenses=[30000,25000, 27000, 25000, 25000, 32000];
var totalexp=0;
var count = 0;
for (let exp of expenses){
    //console.log(val);
    totalexp+=exp;
}
console.log("Total expenses =", totalexp);

//print exp > 25000

for (let exp of expenses){
    //console.log(val);
    if(exp>=25000){
          console.log(exp);  
    }
    
}

// count how many months above 25000?

for (let exp of expenses){
   
    if(exp>25000){
       count++ ;  
    }
}
console.log(count);
//Highest expense
var maxexp=0;
for (let exp of expenses){
   
    if(exp>maxexp){
        maxexp=exp;
    }
}
console.log(maxexp);


