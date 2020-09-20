import React from 'react';
import ReactDOM from 'react-dom';

import Departments from './Departments';
import Stats from './Stats';

import {Provider} from 'react-redux'
import { store, stateMounter } from './store.js'
import {connect} from 'react-redux'

import App from './App.js'


ReactDOM.render(<Provider store={store}><App /></Provider>, document.querySelector('#root'));