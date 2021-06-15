//To add digits of a digit numbers  123  1+2+3 =6 
var num=362;
var temp;
var temp1=0;
var n;

while(num!=0){
    temp = num%10;
    num = Math.floor(num/10);
    temp1= temp1+ temp;
    
}
console.log(temp1);