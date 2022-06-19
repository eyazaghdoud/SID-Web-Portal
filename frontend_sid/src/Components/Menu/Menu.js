import React from 'react'
import './menu.css'
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react'
import NavBar from '../Navbar/NavBar';
import Services from '../../API/Services'

export default function Menu({ childToParent }) {


  const [apiResponse, setApiResponse] = useState({})
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  const token = user.jwttoken;


  useEffect(() => {

    let getAppRequest = {

      "tenant": "xe76tb0x53a4uz8.eu",
      "authenticationKey": "eyJhbGciOiJFUzM4NCIsImtpZCI6IjU3MjMxNTQxLWY3ZDEtNDU3Zi1iZmI3LTMwYzc0MmJlYTBmMSIsInR5cCI6IkpXVCJ9.eyJzdWJUeXBlIjoidXNlciIsInRlbmFudElkIjoiV2lyMEk0QVdHdEVxcFVUUndJRVVDMUV3SnBndXFYREkiLCJqdGkiOiI1NzIzMTU0MS1mN2QxLTQ1N2YtYmZiNy0zMGM3NDJiZWEwZjEiLCJhdWQiOiJxbGlrLmFwaSIsImlzcyI6InFsaWsuYXBpL2FwaS1rZXlzIiwic3ViIjoiNjI3YmRlZjUyZWI1MmE2YjNiYTQ2MzM0In0.X_CC34P2ClsKBsUsWDyGZz6bOPVfWYXAirjry53yfjLemfqWVyS4klbBmh4WYR5VDhYkmao9mGF65QSRwSn0qcIZKsvI5ybbuo0MhHnB4oTv5W_nJTvs5WK6ObqITigA",
      "appId": "d1b9ca8f-0c1f-4f77-8537-25c1c2e817ce"

    }
    /*let appRequest = {

      "tenant": user.userInfo.tenant,
      "authenticationKey": user.userInfo.authenticationKey,
      "appId": "d1b9ca8f-0c1f-4f77-8537-25c1c2e817ce"

    }*/


    /***********  calling the function getApp from Services.js ************/

    /*axios.post("http://localhost:8080/Keyrus/SID/qlik/getApp", getAppRequest, {
      headers: { Authorization: `Bearer ${token}` }
    })*/
    Services.getApp(getAppRequest)
      .then(response => {

        setApiResponse(response.data.attributes)
  

      })
      .catch(error => {
        console.log(error)
      })

  }, []);


  return (

    <>
      <NavBar component='Menu' />
      <div className='titlecontainer'> <h1 className='title'>Menu des dashboards</h1> </div>
      <div className="maincontainermenu">
        <div className="section1menu">

          {(user.userInfo.role === 'admin') &&
            <div >
              <button className="menubutton" onClick={() => {
                childToParent(0)
                navigate("/AdminDashboard")
              }} > Analyse des ventes </button>

              <button className="menubutton" onClick={() => {
                childToParent(1)
                navigate("/AdminDashboard")
              }}> Clients </button>

              <button className="menubutton" onClick={() => {
                childToParent(2)
                navigate("/AdminDashboard")
              }} > Articles</button>

              <button className="menubutton" onClick={() => {
                childToParent(3)
                navigate("/AdminDashboard")
              }}> Agences </button>

              <button className="menubutton" onClick={() => {
                childToParent(4)
                navigate("/AdminDashboard")
              }} > Collaborateurs </button>

              <button className="menubutton" onClick={() => {
                childToParent(5)
                navigate("/AdminDashboard")
              }} > Détails ventes</button>

            </div>
          }

          {(user.userInfo.role === 'gestionnaire') &&
            <div >
              <button className="menubutton" onClick={() => {
                childToParent(0)
                navigate("/ManagerDashboard")
              }} > Analyse des ventes </button>

              <button className="menubutton" onClick={() => {
                childToParent(1)
                navigate("/ManagerDashboard")

              }}> Clients </button>

              <button className="menubutton" onClick={() => {
                childToParent(2)
                navigate("/ManagerDashboard")
              }} > Articles</button>

              <button className="menubutton" onClick={() => {
                childToParent(3)
                navigate("/ManagerDashboard")
              }} > Collaborateurs </button>

              <button className="menubutton" onClick={() => {
                childToParent(4)
                navigate("/ManagerDashboard")
              }} > Détails ventes</button>

            </div>
          }


        </div>
        <div className="section2menu">

          <div className='app-details-container2'>
            <h2> App details </h2>
            <h3 className='minititle'>Name</h3>
            <h4 className='minititle2'>{apiResponse.name} </h4>
            <h3 className='minititle'>Description</h3>
            <h4 className='minititle2'>{apiResponse.description} </h4>
          </div>
        </div>
      </div>
    </>

  )
}
