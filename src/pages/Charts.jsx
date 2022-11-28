import React, {useEffect, useState} from 'react'
import Menu from "../components/Menu";
import ApiService from '../services/ApiService'
import Important_information from "../components/Important_information";
import '../styles/index.css'
import ChartDashboard from "../components/ChartDashboard";


function Charts() {

  return (
    <>
      <div className="container">
        <Menu/>
        <div>
          <ChartDashboard/>


        </div>
        <Important_information/>
      </div>
    </>
  )
}

export default Charts