import React from 'react';
import Employees from './Employees';
import {connect} from 'react-redux'

const Department = ({ department, employees })=> {
    return (
      <li>
        <span className='department-title'>
          { department ? department.name : 'No Department' } ({
            employees.filter( employee => employee.departmentId === (department ? department.id : null) ).length
          })
        </span>
        <Employees
          department={ department }
          employees ={ employees }
        />
      </li>
    );
};


const mapState = (state) => {
  return {
    employees: state.employees,
    departments: state.departments
  }
}

export default connect(mapState, null)(Department)
