import{ Injectable } from "@angular/core";

@Injectable()

export class EmployeeService {

    employee = [
        { id: 1, name: 'abc', dept: 'CSE' },
        { id: 2, name: 'xyz', dept: 'EEE' },
        { id: 3, name: 'def', dept: 'ECE' }
      ]
      getEmployee()
      {
          return this.employee
      }
      setEmployee(emp)
      {
            this.employee.push(emp)
      }
}

