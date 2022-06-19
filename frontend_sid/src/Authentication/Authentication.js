import axios from "axios"

const AUTH_URL = "http://localhost:8080/SID/server/authentication";


const authentication= async (loginRequest) => {
 
    return await axios.post(AUTH_URL,loginRequest)}


    
const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("password");
    localStorage.removeItem("dashboard"); }

export default {
    authentication,
    handleLogout
}