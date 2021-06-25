//To add digits of a digit numbers  123  1+2+3 =6 
var num=362;
var temp;
var temp1=0;
var n;

while(num!=0){   //362   //36    3
    temp = num%10;      // 362%10 = 2  //6   3
    num = Math.floor(num/10);       //36   3  0
    temp1= temp1+ temp;     //2    6+2=8     11
    
}
console.log(temp1);