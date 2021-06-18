//third way of finding a pair which gives sum as given number;

var arr=[1,2,3,4];
var low=0, upp=arr.length-1;
var element=4;

var count=1;
while(low<upp){
    let total=arr[low]+arr[upp];

    if(element==total){
        console.log(arr[low],arr[upp]);
        low++;
    }
    //2nd case
    else if(element>total){
        low++;
    }
    else if(element<total){
        upp--;
    }
    count++;
}
console.log(count);