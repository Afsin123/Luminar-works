//Greatest common factor
//factors of a given number
var num1 = 5;
var num2 = 15;

var hcf;
var i = 1;

while (i <= num1) {

    if ((num1 % i == 0) && (num2 % i == 0)) {
        hcf = i;
    }
    i++;
}
console.log("HCF is", hcf);

