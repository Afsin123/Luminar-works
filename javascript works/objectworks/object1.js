// declared using {} 
// key.value 

var expenses={jan:10000,feb:15000,march:22000,april:23000,may:20000}

console.log(expenses.march);
// To 
expenses.june=25000;

console.log(expenses);
console.log(expenses["may"]);

// To add 3000 to expense of march
expenses.march+=3000;
console.log(expenses);

// To check if a key is present in an object
console.log("July" in expenses);

// To check if july is there?
if (!("july" in expenses)){
    expenses.july=28000;
}
console.log(expenses);
