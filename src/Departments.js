import React from 'react';
import Department from './Department';
import {connect} from 'react-redux'

const Departments = ({ departments, employees })=> {
  return (
    <ul className='departments'>
      <Department employees = { employees }/>
      {
        departments.map( department => {
          return (
            <Department
              key = { department.id }
              department = { department }
              employees = { employees }
            />
          );
        })
      }
    </ul>
  );
}

const mapState = (state) => {
  return {
    employees: state.employees,
    departments: state.departments
  }
}

export default connect(mapState, null)(Departments)
