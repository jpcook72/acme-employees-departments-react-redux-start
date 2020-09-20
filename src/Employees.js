import React from 'react';
import Employee from './Employee';
import {connect} from 'react-redux'
import { employeeDestroyer, deptRemover } from './store'

const Employees = ({ department, employees })=> {
  return (
      <ul>
        {
          employees.filter( employee => 
            employee.departmentId === (department ? department.id : null ))
            .map( employee => 
            <Employee employee={ employee } destroyEmployee={employeeDestroyer} removeFromDepartment={deptRemover} key={ employee.id }/>)
        }
      </ul>
  );
};

const mapState = (state) => {
  return {
    employees: state.employees,
    departments: state.departments
  }
}
export default connect(mapState, null)(Employees)