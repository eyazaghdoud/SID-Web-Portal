import React from 'react'
import './notificationModal.css'
import errorIcon from '../../../assets/error.svg';
import checkIcon from '../../../assets/check.svg';
import warningIcon from '../../../assets/warning.svg';

export default function NotificationModal({ setOpenModal, params }) {
    return (
        <div className="notificationBackground">

            {params.title === "SUCCESS" &&

                <div className='notificationContainer' style={{ backgroundColor: 'green' }}>

                    <div className='notification1' style={{ backgroundColor: 'green' }}>
                        <div className="notificationImage">
                            <img src={checkIcon} alt="" />
                        </div>

                        <div>
                            <p className="notificationTitle" >{params.title}</p>
                            <p className="notificationMessage" >
                                {params.message}
                            </p>
                        </div>

                        <div className='buttonContainer'>
                            <button className='closeButton' onClick={() => {
                                setOpenModal(false);
                                window.location.reload()
                                 }}> Okay
                            </button>
                        </div>
                    </div>
                </div>
            }
            {params.title === "ERROR" &&

                <div className='notificationContainer' style={{ backgroundColor: 'red' }}>
                    <div className='notification1' style={{ backgroundColor: 'red' }}>
                     
                        <div className="notificationImage">
                            <img src={errorIcon} alt="" />
                        </div>
                       
                        <div>
                            <p className="notificationTitle" >{params.title}</p>
                            <p className="notificationMessage" >
                                {params.message}
                            </p>
                        </div>
                        
                        <div className='buttonContainer'>
                            <button className='closeButton' onClick={() => {
                                setOpenModal(false);
                            }}>
                                Okay
                            </button>
                        
                        </div>
                    </div>
                </div>
            }

            {params.title === "FAIL" &&

                <div className='notificationContainer' style={{ backgroundColor: 'red' }}>
                    <div className='notification1' style={{ backgroundColor: 'red' }}>
                        <div className="notificationImage">
                            <img src={warningIcon} alt="" />
                        </div>

                        <div>
                            <p className="notificationTitle" >{params.title}</p>
                            <p className="notificationMessage" >
                                {params.message}
                            </p>
                        </div>

                        <div className='buttonContainer'>
                            <button className='closeButton' onClick={() => {
                                setOpenModal(false);
                            }}>
                                Okay
                            </button>
                        </div>
                    </div>
                </div>
            }

        </div>

    )
}
