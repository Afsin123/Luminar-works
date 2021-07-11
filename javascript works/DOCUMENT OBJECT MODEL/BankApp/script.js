//
function CreateUser() {
    let account_number = ac_no.value;
    let password = pswd.value;
    let balance = bal.value;
    let user = {
        account_number: account_number,
        password: password,
        balance: balance
    }
    localStorage.setItem(user.account_number, JSON.stringify(user));
    alert("User Created");
    location.reload(true);  //To clear boxes after one use
}

function populate(users) 
{
    let htmldata = "";
    for (let user of users)
    {
        htmldata += <p> account_number : ${user.account_number} password : ${user.password} balance :  ${ user.balance}  </p>
    }
    resultarea.innerHTML = htmldata
}
// To list all users from local storage to document html
// Need to convert JSON  string type to object , therefore use JSON.parse
// To display in array create array named users. 

function ListAllUsers(){
    let users = [];
    for(let i=0; i<localStorage.length;i++)
    {
        let key = localStorage.key(i)
        let user = JSON.parse(localStorage.getItem(key))    
        users.push(user)
    }
  
    //console.log(users);
    populate(users)
}