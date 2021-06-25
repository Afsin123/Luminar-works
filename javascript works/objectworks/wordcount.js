
var text="hello hai hello hai are";
// word count= hello =2, hai = 2, are 1
var words= text.split(" ");
var dict={}
for(let word of words){
    if(word in dict){
        dict[word]+=1;      // dict[hello]=2
    }
    else{
        dict[word]=1;   // dict [hello] =1
                        // dict [hai]  =1
    }
}
console.log(dict);

