//Nested for loops

// for(let i=1; i<=3; i++){
// // var str=""
// for(let j=1; j<=3; j++){
//     // str+=i
// }
// //console.log(str);
// }
// // 

for (let i=1; i<=3 ; i++)
{
    var str=""
    for (let j=1; j<=i; j++)
    {
        str+=j;
        
    }
    console.log(str);
}
