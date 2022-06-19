import React from 'react'
import axios from 'axios'
import './login.css'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../Authentication/AuthContext'
import NavBar from '../Navbar/NavBar';
import Toast from '../Toasts/Toast';
import Authentication from '../../Authentication/Authentication';

export default function Login() {

   // const { authentication } = useAuth();

    let navigate = useNavigate();

    const initialValues = { username: "", password: "" };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});

    const [toastOpen, setToastOpen] = useState(false);
    const [toastType, setToastType] = useState();
    const [toastMessage, setToastMessage] = useState();
    const [toastParams, setToastParams] = useState({ type: '', position: '', message: '' });

    useEffect(() => {
        localStorage.clear()
    }, [])


    const validate = (values) => {

        const errors = {};
        if (values.username === '') {
            errors.username = "Username is required!";
        }
        if (values.password === '') {
            errors.password = "Password is required!";
        }

        return errors;
    }

    const handleChange = (e) => {

        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    }

    const handleSubmit = (e) => {
        const loginRequest = {
            username: formValues.username,
            password: formValues.password,
        };

        e.preventDefault();


        setFormErrors(validate(formValues));


        if (Object.keys(validate(formValues)).length === 0) {

            //axios.post('http://localhost:8080/SID/server/authentication', loginRequest)

         /***********  calling the function authentication from AuthProvider ************/

            //authentication(loginRequest)
            Authentication.authentication(loginRequest)
            .then((response) => {
                if (response.data.jwttoken !== "failed") {

                    localStorage.setItem("user", JSON.stringify(response.data));
                    localStorage.setItem("password", loginRequest.password);   
                    navigate("/Menu")

                } else {

                    console.log("can't log in")
                    setToastOpen(true)
                    setToastParams(previousState => {
                        return { ...previousState, type: 'Error', position: "middle", message: 'Wrong credentials' }
                    }

                    )
                };

            })
                .catch(error => {
                    console.log(error)

                });

        }

        else { console.log("error") }
    }


    return (

        <>

            <NavBar component='Login' />
            <div className="maincontainer">
                <div className="section1">    </div>
                <div className="section2">
                    <div className='formContainer'>
                        <form onSubmit={handleSubmit}>
                            {toastOpen &&
                                <Toast params={toastParams} setOpenToast={setToastOpen}
                                />}

                            <h1>Login</h1>

                            <div className='loginForm'>
                                <div className="loginField">
                                    <label>Username</label>
                                    <input type="text"
                                        name="username"
                                        placeholder="Enter user name"
                                        onChange={handleChange}
                                        value={formValues.username} />

                                </div>
                                <p>{formErrors.username}</p>

                                <div className="loginField">
                                    <label>Password</label>
                                    <input type="password"
                                        name="password"
                                        placeholder="Enter your password"
                                        onChange={handleChange}
                                        value={formValues.password} />

                                </div>
                                <p>{formErrors.password}</p>

                                <button className='loginFormBtn' type="submit">Login</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>


        </>
    )
}
