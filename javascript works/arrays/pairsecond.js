//
var arr=[1,2,3,4];
var element = 6;

for(let i=0; i<arr.length;i++){
    for(j=i+1; j<arr.length; j++){
        let total= arr[i]+arr[j];

        if (element==total){
            console.log("pairs", arr[i], arr[j]);
        }
    }
}