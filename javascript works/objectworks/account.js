var accounts={
    1000:{acno:1000,ac_type:"savings",balance:5000},
    1001:{acno:1001,ac_type:"savings",balance:6000},
    1002:{acno:1002,ac_type:"credit",balance:3000}

}
// To print balance of 1000:

console.log(accounts[1000].balance);

// To add a new key
accounts[1003]={acno:1003,ac_type:"savings",balance:3000}
console.log(accounts);

//