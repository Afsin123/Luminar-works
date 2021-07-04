
var accounts = {
    1000: {
        acno: 1000, ac_type: "savings", balance: 5000, c_transactions: [
            { date: "01/06/2021", from: 1002, amount: 1000 },
            { date: "02/05/2021", from: 1003, amount: 500 },
            { date: "03/06/2021", from: 1001, amount: 1000 }]
    },
    1001: {
        acno: 1001, ac_type: "savings", balance: 6000, c_transactions: [
            { date: "01/06/2021", from: 1000, amount: 1000 },
            { date: "02/05/2021", from: 1003, amount: 500 },
            { date: "03/06/2021", from: 1001, amount: 1000 }]
    },
    1002: {
        acno: 1002, ac_type: "credit", balance: 3000, c_transactions: [
            { date: "01/06/2021", from: 1002, amount: 1000 },
            { date: "02/05/2021", from: 1000, amount: 500 },
            { date: "03/06/2021", from: 1001, amount: 1000 }]
    }

}
// to print credit transactionsof 1002

console.log(accounts[1002].c_transactions);

// print c trans of 1000 whose amount >500

// var =arr.filter(num=>num%2==0)
// console.log(even);
accounts[1000].c_transactions.filter(transaction=>transaction.amount>500).
forEach(transaction => console.log(transaction))


//total amount 
var total_credit= accounts[1000]["c_transactions"].map(transaction=>transaction.amount).reduce((amt1,amt2)=>amt1+amt2);
console.log(total_credit);

//
var lowest=accounts[1000]["c_transactions"].map(transaction=>transaction.amount).reduce((amt1,amt2)=>amt1<amt2 ? amt1:amt2 );
console.log(lowest);

//To print transaction dates
accounts[1000].c_transactions.forEach(transaction=>console.log(transaction.date));

//To print first date
var date=accounts[1000].c_transactions[0].date;
console.log(date);



