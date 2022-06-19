import React from 'react'
import './modal.css'
import PasswordForm from './PasswordForm';

export default function Modal({ setOpenModal, use, manageFunc, abortMission, response}) {
  
  /****** pulling data from passwordForm child component ******/
  const pull_data = () => {
    setOpenModal(false);
  }

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button className='btnX'
            onClick={() => {
              if(use==="modify"){abortMission()}
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        {(use === 'delete') &&
          <PasswordForm func={pull_data} action='delete' manageFunc={manageFunc} response={response}/>}
        {use === "modify" &&
          <PasswordForm func={pull_data} action='changeRole' manageFunc={manageFunc} response={response} />}
      </div>
    </div>
  );
}

