//Print the largest among 3 given numbers; Print the second largest; 
//Sort 3 numbers without using sort function

var num1 = 19, num2 = 16, num3 = 17;
//var num2=19;
//var num3=18;


if ((num1 > num2) && (num1 > num3)) {
    console.log("Largest number is" + num1);
    if (num2 > num3) {
        console.log("Second largest is" + num2);
    }
    else {
        console.log("Second largest is" + num3);

    }

}
else if ((num2 > num1) && (num2 > num3)) {
    console.log("Largest number is" + num2);
    if (num1 > num3) {
        console.log("Second largest is" + num1);
    }
    else {
        console.log("Second largest is" + num3);
    }
}
else {
    console.log(" Largest is" + num3);
    if (num2 > num1) {
        console.log("Second largest is" + num2);
    }
    else {
        console.log("Second largest is" + num1);
    }
}
// Printing numbers in descending order
console.log("Numbers in descending order"); 
if ((num1 > num2) && (num1 > num3)) {
    console.log(num1);
    if (num2 > num3) {
        console.log(num2);
        console.log(num3);
    }
    else {
        console.log(num3);
        console.log(num2);
    }
    //console.log(num3);
}
else if ((num2 > num1) && (num2 > num3)) {
    console.log(num2);
    if (num1 > num3) {
        console.log(num1);
        console.log(num3);
    }
    else {
        console.log(num3);
        console.log(num1);
    }
    //console.log(num3);
}
else {
    console.log(num3);
    if (num2 > num1) {
        console.log(num2);
        console.log(num1);
    }
    else {
        console.log(num1);
        console.log(num2);
    }
   // console.log(num1);
}
// Numbers in ascending order
console.log("Numbers in ascending order");
if ((num1 < num2) && (num1 < num3)) {
    console.log("Smallest number is" + num1);
    console.log(num1);
    if (num2 < num3) {
        console.log(num2);
        console.log(num3);
    }
    else {
        console.log(num3);
        console.log(num2);
    }
   // console.log(num3);
}
else if ((num2 < num1) && (num2 < num3)) {
    console.log("Smallest number is" + num2);
    console.log(num2);

    if (num1 < num3) {
        console.log(num1);
        console.log(num3);
    }
    else {
        console.log(num3);
        console.log(num1);
    }
    //console.log(num3);
}
else {
    console.log("Smallest number is" + num3);
    console.log(num3);
    if (num2 < num1) {
        console.log(num2);
        console.log(num1);
    }
    else {
        console.log(num1);
        console.log(num2);
    }
    //console.log(num1);
}