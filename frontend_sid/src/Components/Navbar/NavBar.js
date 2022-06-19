import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import logo from '../../assets/logo.png';
import logout from '../../assets/logout.png';
import './NavBar.scss'
import { useAuth } from '../../Authentication/AuthContext'
import Authentication from '../../Authentication/Authentication';


export default function NavBar(props) {


    const currentUser = JSON.parse(localStorage.getItem("user"));
    //const { handleLogout } = useAuth();
    const navigate = useNavigate()

    return (
        <>

            <div className='navBar'>
                <div >
                    <img className='logo' src={logo} onClick={() => { navigate('/Menu') }} />
                </div>

                {(props.component === 'Menu' || props.component === 'Profile' ||
                    props.component === 'UserList' || props.component === 'Dashboard') &&
                    <div className='itemContainer'>
                        <NavLink to="/Menu" className='item'>
                            Menu
                        </NavLink>
                        <NavLink to="/Profile" className='item'>
                            Profile
                        </NavLink>
                        {(currentUser.userInfo.role === 'admin') &&
                            <NavLink to='/AllUsers' className='item'>
                                Users
                            </NavLink>}
                        <NavLink to="/" className='item' onClick={Authentication.handleLogout}>
                            <img className='logouticon' src={logout} />
                        </NavLink>
                    </div>}




            </div>
        </>
    )
}
