import React from 'react'
import { useState } from 'react';
import NavBar from '../Navbar/NavBar';
import './profile.scss'
import ChangePassword from './ChangePassword';
import UserInformation from './UserInformation';
import NotificationModal from '../Modal/NotifModal/NotificationModal';


export default function Profile() {
  //const user = JSON.parse(localStorage.getItem("user"));

  /****** setting the current active component ******/
  const [component, setComponent] = useState("UserInformation")

  /****** notification modal props *******/
  const [notifModalOpen, setNotifModalOpen] = useState(false);
  const [notifModalParams, setNotifModalParams] = useState({ title: '', message: '' })
  let notif = ''

 /****** pulling data from the changePassword child component ******/
  const childToParent = (childdata) => {
    notif = childdata
  }
  const pull_data = () => {

    setNotifModalOpen(true);
    if (notif === "SUCCESS") {
      //console.log('this code runs perfectly');
      setNotifModalParams(previousState => {
        return { ...previousState, title: 'SUCCESS', message: 'Password changed successfully !' }
      }

      )
    } else if (notif === "FAIL") {
      //console.log('this code runs perfectly');
      //console.log("this is an error notification");
      //console.log("notif content" + notif);
      setNotifModalParams(previousState => {
        return { ...previousState, title: 'FAIL', message: 'Could not change password ! Check password.' }
      }

      )
    }

  }


  return (
    <>

      {notifModalOpen && <NotificationModal setOpenModal={setNotifModalOpen} params={notifModalParams} />}
      <NavBar component='Profile' />
      <div className='titlecontainer'> <h1 className='title'>User information</h1> </div>
      <div className='containerlist'>
        <div className='containerlist1'>
          <button className='buttonlist' onClick={() => { setComponent('UserInformation') }}> User information</button>
          <button className='buttonlist' onClick={() => {
            setComponent('ChangePassword')
          }}>Account security</button>
          {notif}
        </div>
        <div className='containerlist2'>
          {(component === 'UserInformation') &&
            <UserInformation />
          }
          {(component === 'ChangePassword') &&
            <ChangePassword func={pull_data} childToParent={childToParent} />
          }

        </div>
      </div>

    </>

  )
}
