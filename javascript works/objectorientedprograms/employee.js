// id,name,desig,salary,exp 

// Create 5 employeeobjects 
// Print highest salaried employee
//sort employees according to their experience
//check is there any employee working as QA?

class Employee {
    getemp_Details() {
        let employee_obj = {
            100: { emp_id: 100, emp_name: "Anju", emp_desig: "QA", emp_salary: 20000, emp_exp: 1 },
            101: { emp_id: 100, emp_name: "Arya", emp_desig: "Developer", emp_salary: 22000, emp_exp: 2 },
            102: { emp_id: 100, emp_name: "Manu", emp_desig: "Developer", emp_salary: 25000, emp_exp: 3 },
            103: { emp_id: 100, emp_name: "Vidhu", emp_desig: "Team Lead", emp_salary: 35000, emp_exp: 4 },
            104: { emp_id: 100, emp_name: "Zanya", emp_desig: "Developer", emp_salary: 23000, emp_exp: 2 }

        }
        return employee_obj
    }
       
    highestSalary() {
        let employee_obj = this.getemp_Details()
        if(employee_objemp_salary>25000){
            console.log(employee_obj);
        }
        
        // let sal = this.emp_salary;
        // if ([employee_obj][emp_salary] > sal) {
        //     console.log(emplouee_obj.Employee);

        // }


    }


}
var emp1 = new Employee();

obj.highestSalary();


