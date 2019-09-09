import React, { Component } from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import Employees from './components/Employees'
import EmployeeDetails from './components/addEmployee'

class App extends Component {
  render() {
    return <Employees />
  }
}

export default App
