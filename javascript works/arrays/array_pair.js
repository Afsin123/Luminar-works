//
var arr=[4,5,3];
var total=0;

for(let num of arr){
    total+=num;

}
op=[];
for(let num of arr){
    op.push(total-num)
}
console.log(op);