// break and continue

for(let i=0; i<25; i++)
{
    if(i==10){
        break;
    }
    console.log(i); 
}
console.log("**************************");
// break exit from that loop
// continue - skip current iteration and back loop
for(let i=0; i<25; i++)
{
    if(i==10){
        continue;     // skipped 10, printed rest
    }
    console.log(i);
}