import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import './userList.scss'
import NavBar from '../Navbar/NavBar'
import Modal from '../Modal/PasswordModal/Modal'
import AddUserForm from './AddUserForm'
import trash from '../../assets/trash.webp'
import Services from '../../API/Services'
import NotificationModal from '../Modal/NotifModal/NotificationModal'


export default function UserList() {


    const roles = ["admin", "gestionnaire"];
    const [newRole, setNewRole] = useState()
    const [oldRole, setOldRole]= useState()

    const [component, setComponent] = useState("UserList");
    //const [wsResponse,setWsResponse] = useState("");
    let wsResponse = "";
    /*****  current user info from local storage *****/
    const currentUser = JSON.parse(localStorage.getItem("user"));
    const password = localStorage.getItem("password");
    //const token = currentUser.jwttoken

    
    const [userList, setUserList] = useState([])
    const [modalOpen, setModalOpen] = useState(false);
    const [use, setUse] = useState('')
    const [managedUser, setManagedUser] = useState('')

    /****** Notification *******/
    const [notifModalOpen, setNotifModalOpen] = useState(false);
    const [notifModalParams, setNotifModalParams] = useState({ title: '', message: '' })
    let notif = ''
    //const agences = ["Marsa", "Sousse", "Kalaa", "Sfax"];
    var agenceList = []


    useEffect(() => {

        /****************** Calling getUserList function ******************/

         Services.getUserList() 

        /*axios.get('http://localhost:8080/Keyrus/SID/users/all', {
            headers: { Authorization: `Bearer ${token}` }
        }
        )*/
            .then(response => {
                setUserList(response.data)
                setModalOpen(false)

            })
            .catch(error => {
                console.log(error)
            })

    }, [])


    function handleDelete(userDel) {
        const admin = { username: currentUser.userInfo.userName, password: password };
        const deleteRequest = {
            userNameDel: userDel,
            admin: admin
        };


         
        /*axios.post('http://localhost:8080/Keyrus/SID/users/delete', deleteRequest, {
            headers: { Authorization: `Bearer ${token}` }
        }
        )*/
    /***********  calling the function addUser from Services.js ************/

            Services.deleteUser(deleteRequest)
            .then(response => {
                
                if (response.data === 'User deleted') {
                    setNotifModalOpen(true);
                    setNotifModalParams(previousState => {
                        return { ...previousState, title: 'SUCCESS', message: 'User deleted successfully !' }
                    }

                    )

                } else if (response.data === 'User not found') { alert(response.data) }
               /* else if (response.data === "Check your password") { 
                   
                    
                    wsResponse = response.data;
                    console.log(response.data)}*/
                else { console.log(response.data) }
            })
            .catch(error => {
                console.log(error.response.data)
            })


    }

    /*** Getting the notification type from children ***/
    const childToParent = (childdata) => {
        notif = childdata

    }
    /*** Setting the notification ***/
    const pull_data = () => {

        setNotifModalOpen(true);
        if (notif === "SUCCESS") {
            setNotifModalParams(previousState => {
                return { ...previousState, title: 'SUCCESS', message: 'User added successfully !' }
            }

            )
        } else if (notif === "FAIL") {
            setNotifModalParams(previousState => {
                return { ...previousState, title: 'FAIL', message: 'User already exists !' }
            }

            )
        }

    }

    function handleRoleChange(userModif) {

        const admin = { username: currentUser.userInfo.userName, password: password };
        const modifRequest = {
            username: userModif,
            newRole: newRole,
            admin: admin
        };

        /*axios.post('http://localhost:8080/Keyrus/SID/users/roles', modifRequest, {
            headers: { Authorization: `Bearer ${token}` }
        })*/
        /***********  calling the function changeRole from Services.js ************/

         Services.changeRole(modifRequest)
            .then(response => {
                if (response.data === 'Role updated') {

                    setNotifModalOpen(true);
                    setNotifModalParams(previousState => {
                        return { ...previousState, title: 'SUCCESS', message: 'Role updated successfully !' }
                    }

                    )


                } else if (response.data === 'Same role' ){ alert(response.data)}
                /*else if (response.data === 'Check your password') {
                    
                    //setWsResponse('wrong password') 
                wsResponse= 'wrong password';}*/
               else { console.log(response.data) }
            })
            .catch(error => {
                console.log(error.response.data)
            })


    }

    userList.map((user) => {
        user.role === 'gestionnaire' &&
        agenceList.push(user.agence.libelle)
    })
    

    const checkAgence = () => {
      return (agenceList.length === 4);
    }

    const manage = () => {
        if (use === 'delete') {
            handleDelete(managedUser)
        }
        else if (use === 'modify') {
            handleRoleChange(managedUser)
        }
        
    }

    const abort= ()=>{
        if (use==='modify'){
            window.location.reload(false)
        }
    }
   
    return (

        <>

            {modalOpen && <Modal setOpenModal={setModalOpen} use={use} manageFunc={manage} abortMission={abort}
            response={wsResponse}/>}

            {notifModalOpen && <NotificationModal setOpenModal={setNotifModalOpen} params={notifModalParams} />}
            <NavBar component='UserList' />
            <div className='titlecontainer'> <h1 className='title'>List of users</h1> </div>
            <div className='containerlist'>
                <div className='containerlist1'>
                    <button className='buttonlist' onClick={() => { setComponent("UserList") }}> Users</button>
                    <button className='buttonlist' disabled={checkAgence()} onClick={() => { setComponent("AddUserForm"); }}> Add user</button>

                </div>
                <div className='containerlist2'>

                    {(component === 'UserList') &&
                        <>

                            <table>
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Username</th>
                                        <th>Role</th>
                                        <th>Agence</th>
                                        <th>Delete</th>
                                        <th> Change Role</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        userList.map((user) => {
                                            
                                            return (
                                            <tr key={user.id}>
                                                <td style={{ borderLeft: "2px solid", borderColor: "#f0f4ef" }}>{user.id}</td>
                                                <td>{user.userName}</td>
                                                <td>{user.role}</td>
                                                
                                                <td>{user.agence.libelle}</td>
                                                <td className='delete-btn'  >
                                                    <button className='btntrash' onClick={() => {
                                                        setModalOpen(true);
                                                        setUse('delete');
                                                        setManagedUser(user.userName);
                                                    }} >
                                                        <img className='trashimg' src={trash} />
                                                    </button>
                                                </td>

                                                <td>

                                                    {user.role === 'gestionnaire' ?
                                                        <select option={roles} onChange={(e) => {
                                                            
                                                            setOldRole(user.role)
                                                            setNewRole(e.target.value);
                                                            setModalOpen(true);
                                                            setUse('modify');
                                                            setManagedUser(user.userName);

                                                        }} >
                                                            <option value={user.role}> {user.role} </option>

                                                            {(user.role === 'gestionnaire') &&
                                                                <option value="admin"> admin </option>}
                                                        </select> : <h4>N/A</h4>

                                                    }
                                                </td>

                                            </tr> )}

                                        )

                                    }
                                </tbody>
                            </table>


                        </>}
                       

                    {(component === 'AddUserForm') && <AddUserForm func={pull_data} childToParent={childToParent} agenceList={agenceList}/>}


                </div>
            </div>



        </>
    )
}
