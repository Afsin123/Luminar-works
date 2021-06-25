var employees=[
    [1000,"ajay","developer",20000,2],
    [1001,"ram","developer",22000,2],
    [1002,"ravi","qa",25000,3],
    [1003,"raju","qa",20000,1],
    [1000,"nikil","mrkt",30000,2]
]
//
// for(let employee in employees){
//     console.log(employee);
// }

for (let employee of employees){
    console.log(employee);
}
// To print employee name only
// for(let employee of employees){
//     console.log(employee[1]);
// }
// for(let employee of employees){
//     console.log(employee[3]);
// }
// print designation whose designation=developer
// for(let emp of employees){
//     if(emp[2]=="developer"){
//         console.log(emp);
//     }
// }
// print employee details whose salary is less than 22000
// for(let emp of employees){
//     if(emp[3]<22000){
//         console.log(emp);
//     }
// }