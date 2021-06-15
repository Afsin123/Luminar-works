//Find the sum of odd numbers between 10 and 50
var upp=50;
var low=10;
var sum=0;
var temp;
var i=10;
while(i<=50){
temp=i%2;
if(temp!=0){
    //console.log("odd");
    console.log(i);
    sum=sum+i;
   //
   //console.log(sum);
    
}
i++;
}
console.log(sum);