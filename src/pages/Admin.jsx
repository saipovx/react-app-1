import React from 'react'
import Menu from "../components/Menu";
import Dashboard from "../components/Dashboard";
import Important_information from "../components/Important_information";
import '../styles/index.css'
function Admin() {
  return (
    <>
      <div className="container">
        <Menu/>
        <Dashboard/>
        <Important_information/>
      </div>
    </>
  )
}
export default Admin