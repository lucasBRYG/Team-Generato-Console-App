// TODO: Write code to define and export the Employee class

class Employee {
    // Just like constructor functions, classes can accept arguments
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email;
    }

    getRole() {
        return "Employee";
    }

    getId() {
        return this.id;
    }

    getName() {
        return this.name;
    }
}
  
module.exports = Employee;