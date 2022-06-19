import axios from 'axios';

const API_URL = "http://localhost:8080/Keyrus/SID";


/**** Calling WS getAppService  ***/
const getApp = async (getAppRequest) => {
   const user = JSON.parse(localStorage.getItem("user"));
   return await axios.post(API_URL + "/qlik/getApp", getAppRequest, {
      headers: { Authorization: `Bearer ${user.jwttoken}` }
   })
}

/**** Calling WS addUserService  ***/
const addUser = async (signupRequest) => {
   const user = JSON.parse(localStorage.getItem("user"));
   return await axios.post(API_URL + '/users/add', signupRequest, {
      headers: { Authorization: `Bearer ${JSON.parse(localStorage.getItem("user")).jwttoken}` }
   })

}

/**** Calling WS getAllUsersService  ***/
const getUserList = async () => {
   const user = JSON.parse(localStorage.getItem("user"));
   return await axios.get(API_URL + "/users/all", {
      headers: { Authorization: `Bearer ${user.jwttoken}` }

   }
   )
}

/**** Calling WS deleteUserService  ***/
const deleteUser = async (deleteRequest) => {
   const user = JSON.parse(localStorage.getItem("user"));
   return await axios.post(API_URL + '/users/delete', deleteRequest, {
      headers: { Authorization: `Bearer ${user.jwttoken}` }
   }
   )
}

/**** Calling WS changerRoleService  ***/
const changeRole = async (modifRequest) => {
   const user = JSON.parse(localStorage.getItem("user"));
   return await axios.post(API_URL + '/users/roles', modifRequest, {
      headers: { Authorization: `Bearer ${user.jwttoken}` }
   })
}

/**** Calling WS changePasswordService  ***/
const changePassword = async (changePwdRequest) => {
   const user = JSON.parse(localStorage.getItem("user"));
   return await axios.post(API_URL + '/password/change', changePwdRequest,

      {
         headers: { Authorization: `Bearer ${user.jwttoken}` }
      })
}


export default {
   getApp,
   addUser,
   getUserList,
   deleteUser,
   changeRole,
   changePassword
}


