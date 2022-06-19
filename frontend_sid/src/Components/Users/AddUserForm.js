import React from 'react'
import { useState } from 'react';
import './addUserForm.css'
import Services from '../../API/Services';


export default function AddUserForm({func, childToParent, agenceList}) {

    const roles = ["admin", "gestionnaire"];
    const agences = ["Marsa", "Sousse", "Kalaa", "Sfax"];
    const agencesLeft= agences.filter(agence =>  !agenceList.includes(agence));
    
    const initialValues = { userName: "", password: "", role: "admin", libelle:agencesLeft[0],tenant: "", authenticationKey: "" };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isDisabled, setIsDisabled] = useState(false);
    const currentUser = JSON.parse(localStorage.getItem("user"))
    const token = currentUser.jwttoken;

    //let token = currentUser.jwttoken

    const checkError =(password)=>{
        
        let message='';
        if (password.length < 7) {
            message= "Your password needs a minimum of four characters"
            return {message, value: true}
          } else if (password.search(/[a-z]/) < 0) {
            message= "Your password needs a lower case letter";
            return {message, value: true}
          } else if(password.search(/[A-Z]/) < 0) {
            message="Your password needs an uppser case letter";
            return {message, value: true}
          } else  if (password.search(/[0-9]/) < 0) {
            message= "Your password needs a number";
            return {message, value: true}
          } else  if (password.search(/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/) < 0) {
            message="Your password needs a special character";
            return {message, value: true}
          }else {
            return {message,value:false};
          }
    }

    const validate = (values) => {
        const errors = {};
        if (!values.userName) {
            errors.userName = "Username is required!";
        } else if (values.userName.length < 4) {
            errors.userName = "Username must be more than 4 characters";
        }
        if (!values.password) {
            errors.password = "Password is required!";
        } else if (checkError(values.password).value) {
            errors.password =checkError(values.password).message;
        }
        if (!values.role) {
            errors.role = "Role is required!";
        }
        if (!values.libelle) {
            errors.libelle = "Agence is required!";
        }
        if (!values.tenant) {
            errors.tenant = "Tenant is required!";
        }

        if (!values.authenticationKey) {
            errors.authenticationKey = "Authentication key is required!";
        }

        return errors;
    }

    const handleChange = (e) => {

        const {name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    }

    const handleSubmit = (e) => {
        const signupRequest = {
            userName: formValues.userName,
            password: formValues.password,
            role: formValues.role,
            libelle: formValues.libelle,
            tenant: formValues.tenant,
            authenticationKey: formValues.authenticationKey
        };

        e.preventDefault();

        setFormErrors(validate(formValues));

        if (Object.keys(validate(formValues)).length === 0) {

            /*axios.post('http://localhost:8080/Keyrus/SID/users/add', signupRequest, {
                headers: { Authorization: `Bearer ${token}` }
            })*/
            
        /***********  calling the function addUser from Services.js ************/

            Services.addUser(signupRequest)
                .then(response => {
                   
                    if (response.data.message === 'added') {
                        setIsDisabled(true);        
                        childToParent("SUCCESS");
                        func();
                    
                    } else if(response.data.message === 'exists') {
                        childToParent("FAIL");
                        func();
                    }
                })

                .catch(error => {
                    console.log(error)

                });

        } else {
            console.log("there is some errors")    
        }
     
    }


    return (

        <div className='containerAddUser'>

            <form className='containerAddForm' onSubmit={handleSubmit}>
                <h1 className='titleadduser'>Add User</h1>

                <div className='ui divider'></div>
                <div className='ui form'>
                    <div className="field">
                        <label className='labeladduser'>Username</label>
                        <input type="text"
                            name="userName"
                            placeholder="Enter user name"
                            onChange={handleChange}
                            value={formValues.userName} />

                    </div>
                    <p>{formErrors.userName}</p>

                    <div className="field">
                        <label className='labeladduser'>Password</label>
                        <input type="password"
                            name="password"
                            placeholder="password"
                            onChange={handleChange}
                            value={formValues.password} />

                    </div>
                    <p>{formErrors.password}</p>

                    <div>
                        <div className="field">
                            <label className='labeladduser'>Role</label>
                            <select className='role' options={roles} value={formValues.role} name='role' onChange={handleChange}>
                                <option value='gestionnaire'> Gestionnaire </option>
                                <option value='admin'> Admin </option>
                            </select>
                        </div>

                    </div>
                    <p>{formErrors.role}</p>

                    {formValues.role === 'gestionnaire' && 
                    <>
                     <div className="field">
                        <label className='labeladduser'>Agence</label>
                        <select className='role' options={agencesLeft} value={formValues.libelle} name='libelle' onChange={handleChange}>
                

                                       { agencesLeft.length > 1 &&
                                       
                                       agencesLeft.map((agence) => {
 
                                            return (
                                            <option key={agence} value={agence}> {agence} </option>)
                                        }) }

                                    {agencesLeft.length === 1 &&
                                        
                                        <option key={agencesLeft[0]} value={agencesLeft[0]}> {agencesLeft[0]} </option>
                                        
                                    }
                                    
                                   
                             
                            </select>
                        
                    </div>
                    <p>{formErrors.libelle}</p> 
                    </>
                    }

                    <div className="field">
                        <label className='labeladduser'>Tenant</label>
                        <input type="text"
                            name="tenant"
                            placeholder="tenant"
                            onChange={handleChange}
                            value={formValues.tenant} />

                    </div>
                    <a onClick={(e)=>{
                                e.preventDefault();
                                setFormValues({ ...formValues, tenant: currentUser.userInfo.tenant });
                            }}> Assign same Tenant</a>
                    <p>{formErrors.tenant}</p>

                    <div className="field">
                        <label className='labeladduser'>Authentication key</label>
                        <input type="text"
                            name="authenticationKey"
                            placeholder="authentication key"
                            onChange={handleChange}
                            value={formValues.authenticationKey} />

                    </div>
                    <a onClick={(e)=>{
                                
                                e.preventDefault();
                                
                                setFormValues({ ...formValues, authenticationKey: currentUser.userInfo.key});
                            }}> Assign same key</a>
                    <p>{formErrors.authenticationKey}</p>

                    <button className='formBtn' type="submit" disabled={isDisabled}>Add user</button>
                </div>
            </form>

        </div>
    )

}
