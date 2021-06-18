// var row;
// var col;
var str="";
for (let row=1; row<=5; row++){
    for (let col=1; col<=9; col++){
        if ((row==5)|(row+col==6)|(col-row==4))
        {
          str+="* ";
        //console.log(str"* ");
        }
        else{
            str+=" ";
        }
    }
    console.log(str);
}

