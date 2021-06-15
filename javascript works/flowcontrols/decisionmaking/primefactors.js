//factors of a given number
var num1 = 12;
var num2 = 16;
var temp;
var hcf;
var i = 1;
var j = 1;
while (i <= num1) {


    temp = num1 % i;
    if ((temp == 0)) {
        console.log("factors of" + num1, i);
    }
    i++;
}
while (j <= num2) {
    temp = num2 % j;
    if (temp == 0) {
        console.log("factors of" + num2, j);
    }
    j++;

}