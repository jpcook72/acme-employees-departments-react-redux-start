import React from 'react';
import ReactDOM from 'react-dom';

import Departments from './Departments';
import Stats from './Stats';

import {Provider} from 'react-redux'
import { store, stateMounter } from './store'
import {connect} from 'react-redux'

export class App extends React.Component{
  componentDidMount() {
    this.props.mountState();
  }
  render(){
    const { departments, employees } = this.props;
    return (
      <div>
        <h1>Acme Employees And Departments</h1>
        {departments.length && employees.length ? 
        (<div><Stats employees={ employees }/>
        <Departments
          departments={ departments }
          employees={ employees }
      /></div>) 
      : null}
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    employees: state.employees,
    departments: state.departments
  }
}

const mapDispatch = (dispatch) => {
  return {
    mountState: function() {
      dispatch(stateMounter())
    },
  }
}

export default connect(mapState, mapDispatch)(App)