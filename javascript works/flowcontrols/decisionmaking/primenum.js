//check if given number is prime or not

var num=12;
var flag=0;

for(let i=2; i<num; i++)
{
    if(num%i==0)
    {
        flag++;   // flag will increment if condition is true
    }
}
console.log(flag==0?"prime":"not prime");