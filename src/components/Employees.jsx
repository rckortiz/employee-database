import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import EmployeeDetails from './components/EmployeeDetails'
import addEmployee from './components/addEmployee'

const Employees = () => {
  const [employees, setEmployees] = useState([])

  const fetchEmployees = async () => {
    const resp = await axios.post(
      "https://sdg-staff-directory-app.herokuapp.com/api/Dee's%20Nuts/Employees"
    )
    setEmployees(resp.data)
  }

  useEffect(() => {
    fetchEmployees()
  }, [])

  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Employees}>
            {' '}
            Home Page
          </Route>
          <Route exact path="/EmployeeDetails" component={EmployeeDetails}>
            {' '}
            Employee Details
          </Route>
          <Route exact path="/addEmployee" component={addEmployee}>
            {' '}
            Add an Employee
          </Route>
        </Switch>
      </Router>
      <main></main>
    </>
  )
}

export default Employees
