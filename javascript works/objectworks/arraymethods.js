// Array Methods
  /******  
   => arrow function
    
   function add(num1,num2){
       return num1+num2 
   }

   function sub(num1,num2){
       return num1-num2
   }
   function cube(num){
       return num**3
   }
*/
   // Reduce the code using arrow function   
   // syntax: (parameter 1, parameter 2) return statement;

   let add= (num1,num2)=> num1+num2;
   
    let sub= (num1,num2)=> num1-num2;
    
    let cube=(num)=> num**3;
 
    console.log(add(10,20));
    console.log(sub(30,10));
    console.log(cube(3));

 // create arrow function to return odd, even 

 let numcheck=(num)=> num%2==0? "even": "odd"
 console.log(numcheck(7));

//  // array methods :-   
//  Map(), filter(), reduce(), sort(), find(), some(), forEach()

// map () for all objects without condition otherwise filter()



// find the squares

/*  let sq=(num)=> num**2;
var squares=arr.map(sq);
console.log(squares);   */
var arr=[1,3,5,2,4];

var squares=arr.map( (num)=> num**2)
console.log(squares); 

// to find cube
var cubes=arr.map((num)=>num**3)
console.log(cubes);


// using filter
// To print even numbers only
var even=arr.filter(num=>num%2==0)
console.log(even);

// Reduce function

// when we need single output after processing array 

// like sum of array, highest , lowest
var sum=arr.reduce((num1,num2)=>num1+num2)
console.log(sum);

var max=arr.reduce((num1,num2)=>num1>num2?num1:num2)
console.log(max);

var min=arr.reduce((num1,num2)=>num1<num2?num1:num2)
console.log(min);

// adding multiple arguments using function
let add_more=(...args)=>args.reduce((num1,num2)=>num1+num2)
//console.log(add

// some() method
var is_available=arr.some((num)=>num==7);
console.log(is_available);

