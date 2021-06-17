var num=[1,2,3,4];
var sum=0;

for(let nos of num){
    sum+=nos;
    if(sum=6){
        console.log(nos);
    }
    

}
console.log(sum);