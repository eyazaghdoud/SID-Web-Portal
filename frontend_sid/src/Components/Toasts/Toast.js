
import React from "react";
import './toast.css'
import checkIcon from '../../assets/check.svg';
import errorIcon from '../../assets/error.svg';


export default function Toast({setOpenToast, params}) {


    const title = params.type;
   
    {/*className={`notification toast ${params.position}`}  style={{backgroundColor:"red"}}*/}
    return (
        <>
         
            <div className={`notification-container ${params.position}`}>
               
            {params.type === 'Error' &&
                        <div 
                            

                            className={`notification ${params.position}`}  style={{backgroundColor:"red"}}
                        >
                            <button onClick={()=> {setOpenToast(false); 
                            
                            }}>
                                X
                            </button>
                            
                            <div className="notification-image">
                                <img src={errorIcon} alt="" />
                            </div>
                            <div>
                                <p className="notification-title" style={{color:'white'}}>{title}</p>
                                <p className="notification-message" style={{color:'white'}}>
                                    {params.message}
                                </p>
                            </div>
                            
                        </div>}
        {params.type === 'Success' &&
                        <div 
                            
                            className={`notification toast ${params.position}`}  style={{backgroundColor:"green"}}
                            
                        >
                            
                            <button onClick={()=> {setOpenToast(false)
                            window.location.reload(false);}}  >
                                X
                            </button>
                            
                            <div className="notification-image">
                                <img src={checkIcon} alt="" />
                            </div>
                            <div>
                                <p className="notification-title" style={{color:'white'}}>{title}</p>
                                <p className="notification-message" style={{color:'white'}}>
                                    {params.message}
                                </p>
                            </div>
                            
                        </div>}
                    
                
            </div>
        </>
    );
}