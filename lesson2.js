//1
var user = {};

user.name = "PULUP";
user.surname = "SHEVCHENKO";

user.name = "SERGIY";

delete user.name;

//2
var employeeSalaries = {
    salary: 0
};

var employee1 = {}
var employee2 = {}
var employee3 = {}

employee1.salary = 1000;
employee2.salary = 500;
employee3.salary = 2700;

console.log(employee1.salary + employee2.salary + employee3.salary);
