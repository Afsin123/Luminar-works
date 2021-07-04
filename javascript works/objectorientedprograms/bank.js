//Bank
//createAccount()
//balance enquiry
//deposit
//withdrawal

class Bank{
    createAccount(account_number,name,balance){
        this.acc_no=account_number;
        this.name=name;
        this.balance=balance;
    }
    balanceEnquiry()
    {
        console.log("Your account balance is"+this.balance);
    }
    deposit(amt){
        this.balance+=amt;
        console.log("The amount"+amt +"has been deposited to your account.Your new balance is"+this.balance);
    }
    withdrawal(amt){
        if(this.balance<amt){
            console.log("Transaction failed due to insuffiucient balance");
        }
        else{
            this.balance-=amt;
            console.log("Your account "+ this.acc_no, "is debited with"+ amt , "your new balance is"+ this.balance);
        }

    }
    
}
   var obj=new Bank()
    obj.createAccount(1000,"Ramu",2000);
    obj.deposit(2000);
    obj.withdrawal(3000);