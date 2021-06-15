//print fibonacci
var a=0;
var b=1;
var sum;
var i=0;
console.log(a);
console.log(b);
while(i<=10)
{
   sum=a+b;
   console.log(sum);
   a=b;
   b=sum;
   i++;
}

