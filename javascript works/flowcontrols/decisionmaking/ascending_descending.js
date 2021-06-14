// Ascebding and descending

var num1 = 13, num2 = 12, num3 = 17;

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