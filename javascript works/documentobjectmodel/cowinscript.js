function CheckAge(){
    let age=document.querySelector("#age").value
     //let html_data=age>18?"eligible":"noteligible"
    let html_data="";
    if(age>=18){
        
       html_data= '<div style="background-color: seagreen;"> Eligible for vaccination </div> '
    }
    else 
    {
        html_data= '<div style="background-color: red;"> Not eligible for vaccination </div>' 
    }

     result.innerHTML=html_data
}
