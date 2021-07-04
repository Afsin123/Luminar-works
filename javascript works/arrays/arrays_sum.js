// if sum of two elements =6; print those array elements;

var num=[1,2,3,4];
var sum=0;

for(let nos of num){
    sum+=nos;
    if(sum==5){
    console.log(num);
    }
    

}
console.log(sum);
