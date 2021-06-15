// Print the sum of cubes of digits 123 = 1 cube + 2 cube + 3 cube 

var num=231;
var temp;
//var temp1=0;
var cube;
var sum=0;

while(num!=0){
    temp = num%10;
    num = Math.floor(num/10);
    cube= temp*temp*temp
  //  temp1= temp1+ temp;
    console.log(cube);
    sum=sum+cube;
    
}
//console.log(temp1);
console.log(sum); 