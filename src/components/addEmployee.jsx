import React, { useState, useEffect } from 'react'
import axios from 'axios'

// const addEmployee = () => {
//   const [employee, setEmployee] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     phone: '',
//     jobTitle: '',
//     jobDescription: '',
//     address: '',
//     city: '',
//     state: '',
//     zip: ''
//   })

//   const addEmployeeData = async e => {
//     e.preventDefault()
//     const resp = await axios.post(
//       "https://sdg-staff-directory-app.herokuapp.com/api/Dee's%20Nuts/Employees"
//     )
//     setEmployee(resp.data)
//   }

//   useEffect(() => {
//     addEmployee(), addEmployeeData()
//   })

//   return (
//     <div>
//       <h1>add an employee</h1>
//     </div>
//   )
// }

// export default addEmployee
