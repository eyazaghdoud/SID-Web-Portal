import React from 'react'
import './modal.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


export default function PasswordForm(props) {

  const [formPwd, setFormPwd] = useState('')
  const [formError, setFormError] = useState('')
  const password = localStorage.getItem("password");


  const validate = (pwd) => {
    let error = "";
    if (formPwd === '') {
      error = "Password is required!";
    }
    /*else if (props.response === 'Check your password') {
      error = "Check your password!";
    }*/
    else if (formPwd !== password) {
      error = "Check your password!";
    }
    return error;
  }

  const handleSubmit = (e) => {

    e.preventDefault();

    setFormError(validate(formPwd));

    if ((validate(formPwd)).length === 0) {
      if (formPwd === password) {
        props.manageFunc();
        props.func();
      }
      else {
        /* console.log("RESPONSE " + props.response);
         console.log(validate(formPwd))*/
        console.log("wrong password")
      }


    } else {
      console.log(validate(formPwd))
    }
  }


  return (

    <div className='container'>
      <form onSubmit={handleSubmit}>

        <div className="title">
          <h3>Please enter your password</h3>
        </div>

        <div className="body">
          <div> <p className='labeltxt'>Password</p> </div>
          <input className='inputpass' type="password"
            name="password"
            placeholder="password"
            onChange={(e) => {
              setFormPwd(e.target.value)
            }}
            value={formPwd}
          />
          <p className='errortext'>{formError}</p>
        </div>

        <div className="footer">
          <button type="submit"> Continue</button>
        </div>

      </form>
    </div>
  )
}
