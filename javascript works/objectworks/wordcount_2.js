var text= "As Aradhya often gets confused with the letters b & d and make frequent letter reversal while writing. She has visual discrimination issues where the child tends to have difficulties in identifying identical letters. It has to be further checked using intervention methods. "
var words =text.split(" ");

var dict = {};
for(let word of words ){
    if( word in dict){
        dict[word]+=1;
    }
    else
    {
        dict[word]=1;
    }
}
console.log(dict);