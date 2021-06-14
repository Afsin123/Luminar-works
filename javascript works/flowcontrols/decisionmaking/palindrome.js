// To print palindrome if a number is palindrome  eg : 121, 1221, 12321, 1234321, etc

var num=121;
var num1=num;
var result="";

while(num!=0){
let digit=(num%10);
num= Math.floor( num/10);
result=result+digit;
}
//num=0    
if(result==num1)
{
    console.log("Number is a palindrome");
}
else{
    console.log("Not palindrome");
}