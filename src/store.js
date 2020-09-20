import {createStore, applyMiddleware} from 'redux'
import axios from 'axios'
import thunkMiddleware from 'redux-thunk'

  export const employeeDestroyer = (employee) => {
    return async function(dispatch) {
      await axios.delete(`/api/employees/${employee.id}`);
      dispatch({
        type: 'EMP_DESTROYER',
        employee
      });
    }
  }

export const deptRemover = (employee) => {
  return async function(dispatch) {
    employee = (await axios.put(`/api/employees/${employee.id}`, { departmentId: null})).data;
    dispatch({
      type: 'DEPT_REMOVER',
      employee
    });
  }
}


  export const stateMounter = () => {
    return async function(dispatch) {
      const responses = await Promise.all([
        axios.get('/api/employees'),
        axios.get('/api/departments'),
      ]);
      dispatch({
        type: 'STATE_MOUNT',
        state: responses.map(response => response.data)
      })
    }
  }

const initialState = {
    departments: [],
    employees: []
  }
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'STATE_MOUNT':
        return {...state, employees: action.state[0], departments: action.state[1]};
      case 'DEPT_REMOVER':
        const newEmployees = state.employees.map(_employee => action.employee.id === _employee.id ? action.employee : _employee);
        return {...state, employees: newEmployees};
      case 'EMP_DESTROYER':
        const employees = state.employees.filter(_employee => action.employee.id !== _employee.id);
        return {...state, employees: employees};
      default:
        return state
    }
  }

export const store = createStore(reducer, applyMiddleware(thunkMiddleware))