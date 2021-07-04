// ABAC 

var pattern="ABAC";
var dict={};
for(let char of pattern){
    if(char in dict){
        console.log("First recursive char", char);
        break
    }
    else{
        dict[char]=1;
    }
}

// Key   value
// A      1
// B      1 