var arr=[8,7,11,12,10,9];
//arr.sort((num1,num2)=>num1<num2? -1:1)

arr.sort((num1,num2)=>num1-num2)
console.log(arr);
//arr.sort((num1,num2)=>num2-num1)
//console.log(arr);

var element=12;
var flag=0;
var low=0,upp=arr.length-1;
while(low<=upp){
    let mid=Math.floor((low+upp)/2)

    if(element>arr[mid]){
        low=mid+1;
    }
    else if(element<arr[mid]){
        upp=mid-1;
    }
    else if(element==arr[mid]){
        flag++;
        break;
    }
    
}
console.log(flag==0?"not found":"found");