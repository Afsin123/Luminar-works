

 function SignUp(){
    location.href="createuser.html"
}


 
 function Login(){
     location.href="LogInbook.html"
     
 }

 function CreateUser(){
    let name = name.value;
    let username = username.value;
    let password= password.value;
     if (gender_male ==1)
            let gender=gender_male;   
     else{
       gender =  gender_female; 
     } 
    let user = {
        name: name,
        gender = gender,
        username: username,
        password: password,
        balance: balance
    }
    localStorage.setItem(user.username, JSON.stringify(user));
    alert("User Created");
    location.reload(true);  //To clear boxes after one use
 }