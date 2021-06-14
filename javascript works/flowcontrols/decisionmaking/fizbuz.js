//If the number is divisible by 3 print fiz, if the number is divisible by 5 print buz; if the number s divided by15 print fizbuz
var num=16;
if ((num%3==0)&&(num%5==0)){
    console.log("FIZBUZ");
}
else if((num%3==0)||(num%5==0))
{  
  if(num%3==0){
      console.log("FIZ");
  }
  else
  {
      console.log("BUZ");
  }

}
else
{
    console.log("Not divisible");
}

