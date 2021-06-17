// print primenos btw 21 to 40

var low=21;
var upp=40
var flag=0;

for(let num=low; num<=upp; num++)
{
    let flag=0;
    //num21//
    for(let i=2;i<num;i++)
    {
          if(num%i==0){
              flag++;
              break;
          }
    }
    if(flag==0){
        console.log(num);
    }
}
