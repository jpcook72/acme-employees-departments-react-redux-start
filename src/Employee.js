import React from 'react';
import { employeeDestroyer, deptRemover } from './store'
import {connect} from 'react-redux'

const Employee = ({ employee, destroyEmployee, removeFromDepartment })=> {
  return (
    <li key={ employee.id }>
      { employee.name }
      <button onClick={ ()=> destroyEmployee(employee)}>x</button>
      {
        !!removeFromDepartment && (
          <button onClick={ ()=> removeFromDepartment(employee)}>Remove From Department</button>
        )
      }
    </li>
  );
};

const mapDispatch = (dispatch) => {
  return {
    destroyEmployee: function(employee) {
      console.log('click');
      dispatch(employeeDestroyer(employee))
    },
    removeFromDepartment: function(employee) {
      dispatch(deptRemover(employee))
    },
  }
}

export default connect(null, mapDispatch)(Employee)
