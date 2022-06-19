import { React, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './Authentication/AuthProvider';
import ProtectedRoutes from './ProtectedRoutes'
import Login from './Components/Login/Login';
import Menu from './Components/Menu/Menu';
import UserList from './Components/Users/UserList';
import Profile from './Components/Profile/Profile';
import AdminDashboard from './Components/Dashbord/AdminDashboard';
import ManagerDashboard from './Components/Dashbord/ManagerDashboard';
import Error404 from './Components/Error404';


function App() {

  //const [selectedDashboard, setSelectDashboard] = useState('')

  /*** Setting the chosen dashboard ***/
  const childToParent = (childdata) => {
    //setSelectDashboard(childdata)
    localStorage.setItem("dashboard", childdata)
    //setSelectDashboard(localStorage.getItem("dashboard"));

  }
 // const user = JSON.parse(localStorage.getItem('user'))



  return (

    //<AuthProvider>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Menu" element={<ProtectedRoutes>
            <Menu childToParent={childToParent} />
          </ProtectedRoutes>} />

          <Route path="/AllUsers" element={<ProtectedRoutes>
            <UserList />
          </ProtectedRoutes>} />
          <Route path="/Profile" element={<ProtectedRoutes>
            <Profile />
          </ProtectedRoutes>} />

          <Route path="/AdminDashboard" element={<ProtectedRoutes>
            <AdminDashboard />
          </ProtectedRoutes>} /> 

          <Route path="/ManagerDashboard" element={<ProtectedRoutes>
            <ManagerDashboard />
          </ProtectedRoutes>} /> 
          
          <Route path='*' element={<Error404/>}/>
        </Routes>
      </div>
   // </AuthProvider>


  );
}

export default App;
