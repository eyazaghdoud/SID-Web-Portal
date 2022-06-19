import React from 'react'
import { useState } from 'react';
import './changePassword.css'
import Services from '../../API/Services';
export default function ChangePassword({ func, childToParent }) {

    /****** getting the current user's data ******/
    const user = JSON.parse(localStorage.getItem("user"));
    const [formValues, setFormValues] = useState({
        currentPwd: "",
        newPwd: "",
        newPwdConfirm: ""
    })
    const [formErrors, setFormErrors] = useState({});
    let isDisabled = false;

    const checkError = (password) => {

        let message = '';
        if (password.length < 7) {
            message = "Your password needs a minimum of four characters"
            return { message, value: true }
        } else if (password.search(/[a-z]/) < 0) {
            message = "Your password needs a lower case letter";
            return { message, value: true }
        } else if (password.search(/[A-Z]/) < 0) {
            message = "Your password needs an uppser case letter";
            return { message, value: true }
        } else if (password.search(/[0-9]/) < 0) {
            message = "Your password needs a number";
            return { message, value: true }
        } else if (password.search(/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/) < 0) {
            message = "Your password needs a special character";
            return { message, value: true }
        } else {
            return { message, value: false };
        }
    }

    const validate = (values) => {

        let errors = {};

        if (values.currentPwd.length === 0) {

            errors.currentPwd = "Current password is required!";
        }
        if (values.newPwd === '') {
            errors.newPwd = "New password is required!";
        }
        else if (checkError(values.newPwd).value) {
            errors.newPwd = checkError(values.newPwd).message;
        }
        if (values.newPwdConfirm === '') {
            errors.newPwdConfirm = "New password confirm is required!";
        }
        else if (values.newPwdConfirm !== values.newPwd) {
            errors.newPwdConfirm = "Passwords do not match";
        }
        return errors;
    }


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    }

    const handleSubmit = (e) => {
        const changePwdRequest = {
            userName: user.userInfo.userName,
            currentPwd: formValues.currentPwd,
            newPwd: formValues.newPwd
        };

        e.preventDefault();

        setFormErrors(validate(formValues));
        if (Object.keys(validate(formValues)).length === 0) {
            /***********  calling the function changePassword from Services.js ************/

            /*axios.post('http://localhost:8080/Keyrus/SID/password/change', changePwdRequest,

                { headers: { Authorization: `Bearer ${user.jwttoken}` } })*/
            Services.changePassword(changePwdRequest)
                .then(response => {
                    if (response.data === "Password changed") {

                        localStorage.removeItem("password");
                        localStorage.setItem("password", changePwdRequest.newPwd);
                        childToParent('SUCCESS');
                        func();
                        isDisabled = true;
                        console.log(isDisabled);
                    }
                    else if (response.data === "Password not changed") {
                        childToParent('FAIL');
                        func();

                    }
                })
                .catch(error => {
                    console.log(error)
                });



        } else {
            console.log("error");
        }

    }
    return (

        <div className='container' >
            <form className='containerForm' onSubmit={handleSubmit}>
                <h1 className='titleadduser' >Change password</h1>
                <h2 className='titleUser'> User: {user.userInfo.userName}</h2>
                <div className='ui divider'></div>
                <div className='ui form'>
                    <div className="field">
                        <label className='labeladduser'>Current password</label>
                        <input type="password"
                            name="currentPwd"
                            placeholder="Enter current password"
                            onChange={handleChange}
                            value={formValues.currentPwd} />
                    </div>
                    <p>{formErrors.currentPwd}</p>

                    <div className="field">
                        <label className='labeladduser'>New password</label>
                        <input type="password"
                            name="newPwd"
                            placeholder="Enter new password"
                            onChange={handleChange}
                            value={formValues.newPwd} />
                    </div>
                    <p>{formErrors.newPwd}</p>

                    <div className="field">
                        <label className='labeladduser'>New password confirmation</label>
                        <input type="password"
                            name="newPwdConfirm"
                            placeholder="Enter new password "
                            onChange={handleChange}
                            value={formValues.newPwdConfirm} />
                    </div>
                    <p>{formErrors.newPwdConfirm}</p>

                    <button className='formBtn' type="submit" disabled={isDisabled ? true : false}>Change password</button>
                </div>
            </form>
        </div>
    )
}
