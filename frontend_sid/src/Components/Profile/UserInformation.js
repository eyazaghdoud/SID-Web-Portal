import React from 'react'
import { useState } from 'react';
import './userInformation.scss'

export default function UserInformation() {

    const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className='userInformation'>    
    <div className='userList'>
    <div className='userList__users'>
    <div className='userdetailscontainer'>
            <h2> User information </h2>
            <div className="flex-container">
            <div className='flex-child'>
            <h3>Id</h3>
            <h4>{user.userInfo.id} </h4>
            </div>
            <div className='flex-child'>
            <h3>Name</h3>
            <h4>{user.userInfo.userName} </h4>
            </div>
            <div className='flex-child'>
            <h3>Role</h3>
            <h4>{user.userInfo.role} </h4>
            </div>
            <div className='flex-child'>
            <h3>Agence</h3>
            <h4>{user.userInfo.agence.libelle} </h4>
            </div>
    
            
            </div>
          </div>

   
    </div>  
    </div>          
    </div>
  )
}
