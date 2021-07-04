//authenticate (username, password)

class Bank {

    status=0;
    getAccountDetails() {
        let accounts= {
            1000: { account_number: 1000, name: "ajay", balance: 1000, username: 1000, password: "userone" },
            1001: { account_number: 1001, name: "vjay", balance: 2000, username: 1001, password: "usertwo" },
            1002: { account_number: 1002, name: "ram", balance: 3000, username: 1002, password: "userthree" },
            1003: { account_number: 1003, name: "ravi", balance: 4000, username: 1003, password: "userfour" }
        }
        return accounts;
    }
    authenticate(uname,pwd) {
        let data = this.getAccountDetails()
        if (uname in data) {
            console.log("User exists");
            if(uname==data[uname]["username"] & pwd==data[uname]["password"]) {
               // console.log("Authentication success");
               return 1;
            }
            else {
                // console.log("Incorrect password");
                return -1;
            }   
        }
        else{
            // console.log("Invalid User");
            return 0;
        }
    }
}

var obj= new Bank();
obj.authenticate(1007,"userone");