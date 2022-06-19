import React from 'react'
import NavBar from '../Navbar/NavBar'
import './dashboard.scss'
import { useEffect, useState } from 'react'
import './dashboard.scss'

//<script src="https://unpkg.com/enigma.js@2.7.0/enigma.min.js"></script>
export default function ManagerDashboard() {

  const dashboardIndex = localStorage.getItem("dashboard");
  const [currentIndex, setCurrentIndex] = useState(dashboardIndex);
  const user = JSON.parse(localStorage.getItem("user"));

  const titles = [
    'Analyse 360',
    'Clients',
    'Articles',
    'Collaborateurs',
    'Détails ventes'
  ]

  const [iframes,setIframes] = useState([])

  
  const iframesMarsa = [
    "https://xe76tb0x53a4uz8.eu.qlikcloud.com/single/?appid=d1b9ca8f-0c1f-4f77-8537-25c1c2e817ce&sheet=4c74bbaf-f7a8-4ff2-804d-8aab5f965e76&theme=my%20new%20theme&opt=ctxmenu,currsel&select=clearall&select=$::%3DIf(%5BAgence.ID%5D%3D'N%2FA'%2CNull()%2C%5BAgence.ID%5D),MARSA",
    "https://xe76tb0x53a4uz8.eu.qlikcloud.com/single/?appid=d1b9ca8f-0c1f-4f77-8537-25c1c2e817ce&sheet=73bb7b3d-5229-48e9-af4a-f2b46c5eb759&theme=my%20new%20theme&opt=ctxmenu,currsel&select=clearall&select=$::%3DIf(%5BAgence.ID%5D%3D'N%2FA'%2CNull()%2C%5BAgence.ID%5D),MARSA",
    "https://xe76tb0x53a4uz8.eu.qlikcloud.com/single/?appid=d1b9ca8f-0c1f-4f77-8537-25c1c2e817ce&sheet=0e592310-3015-4d33-aaf3-6daf1f085598&theme=my%20new%20theme&opt=ctxmenu,currsel&select=clearall&select=$::%3DIf(%5BAgence.ID%5D%3D'N%2FA'%2CNull()%2C%5BAgence.ID%5D),MARSA",
    "https://xe76tb0x53a4uz8.eu.qlikcloud.com/single/?appid=d1b9ca8f-0c1f-4f77-8537-25c1c2e817ce&sheet=726cfdf3-b93d-4887-b8e0-8e37b6812b1e&theme=my%20new%20theme&opt=ctxmenu,currsel&select=clearall&select=$::%3DIf(%5BAgence.ID%5D%3D'N%2FA'%2CNull()%2C%5BAgence.ID%5D),MARSA",
    "https://xe76tb0x53a4uz8.eu.qlikcloud.com/single/?appid=d1b9ca8f-0c1f-4f77-8537-25c1c2e817ce&sheet=595463ef-2adc-4845-bb3f-a9de2632a783&theme=my%20new%20theme&opt=ctxmenu,currsel&select=clearall&select=$::%3DIf(%5BAgence.ID%5D%3D'N%2FA'%2CNull()%2C%5BAgence.ID%5D),MARSA"
  ]

  const iframesKalaa = [
    "https://xe76tb0x53a4uz8.eu.qlikcloud.com/single/?appid=d1b9ca8f-0c1f-4f77-8537-25c1c2e817ce&sheet=4c74bbaf-f7a8-4ff2-804d-8aab5f965e76&theme=my%20new%20theme&opt=ctxmenu,currsel&select=clearall&select=$::%3DIf(%5BAgence.ID%5D%3D'N%2FA'%2CNull()%2C%5BAgence.ID%5D),MARSA",
    "https://xe76tb0x53a4uz8.eu.qlikcloud.com/single/?appid=d1b9ca8f-0c1f-4f77-8537-25c1c2e817ce&sheet=73bb7b3d-5229-48e9-af4a-f2b46c5eb759&theme=my%20new%20theme&opt=ctxmenu,currsel&select=clearall&select=$::%3DIf(%5BAgence.ID%5D%3D'N%2FA'%2CNull()%2C%5BAgence.ID%5D),MARSA",
    "https://xe76tb0x53a4uz8.eu.qlikcloud.com/single/?appid=d1b9ca8f-0c1f-4f77-8537-25c1c2e817ce&sheet=0e592310-3015-4d33-aaf3-6daf1f085598&theme=my%20new%20theme&opt=ctxmenu,currsel&select=clearall&select=$::%3DIf(%5BAgence.ID%5D%3D'N%2FA'%2CNull()%2C%5BAgence.ID%5D),MARSA",
    "https://xe76tb0x53a4uz8.eu.qlikcloud.com/single/?appid=d1b9ca8f-0c1f-4f77-8537-25c1c2e817ce&sheet=726cfdf3-b93d-4887-b8e0-8e37b6812b1e&theme=my%20new%20theme&opt=ctxmenu,currsel&select=clearall&select=$::%3DIf(%5BAgence.ID%5D%3D'N%2FA'%2CNull()%2C%5BAgence.ID%5D),MARSA",
    "https://xe76tb0x53a4uz8.eu.qlikcloud.com/single/?appid=d1b9ca8f-0c1f-4f77-8537-25c1c2e817ce&sheet=595463ef-2adc-4845-bb3f-a9de2632a783&theme=my%20new%20theme&opt=ctxmenu,currsel&select=clearall&select=$::%3DIf(%5BAgence.ID%5D%3D'N%2FA'%2CNull()%2C%5BAgence.ID%5D),MARSA"
  ]

  const iframesSousse = [
    "https://xe76tb0x53a4uz8.eu.qlikcloud.com/single/?appid=d1b9ca8f-0c1f-4f77-8537-25c1c2e817ce&sheet=4c74bbaf-f7a8-4ff2-804d-8aab5f965e76&theme=my%20new%20theme&opt=ctxmenu,currsel&select=clearall&select=$::%3DIf(%5BAgence.ID%5D%3D'N%2FA'%2CNull()%2C%5BAgence.ID%5D),MARSA",
    "https://xe76tb0x53a4uz8.eu.qlikcloud.com/single/?appid=d1b9ca8f-0c1f-4f77-8537-25c1c2e817ce&sheet=73bb7b3d-5229-48e9-af4a-f2b46c5eb759&theme=my%20new%20theme&opt=ctxmenu,currsel&select=clearall&select=$::%3DIf(%5BAgence.ID%5D%3D'N%2FA'%2CNull()%2C%5BAgence.ID%5D),MARSA",
    "https://xe76tb0x53a4uz8.eu.qlikcloud.com/single/?appid=d1b9ca8f-0c1f-4f77-8537-25c1c2e817ce&sheet=0e592310-3015-4d33-aaf3-6daf1f085598&theme=my%20new%20theme&opt=ctxmenu,currsel&select=clearall&select=$::%3DIf(%5BAgence.ID%5D%3D'N%2FA'%2CNull()%2C%5BAgence.ID%5D),MARSA",
    "https://xe76tb0x53a4uz8.eu.qlikcloud.com/single/?appid=d1b9ca8f-0c1f-4f77-8537-25c1c2e817ce&sheet=726cfdf3-b93d-4887-b8e0-8e37b6812b1e&theme=my%20new%20theme&opt=ctxmenu,currsel&select=clearall&select=$::%3DIf(%5BAgence.ID%5D%3D'N%2FA'%2CNull()%2C%5BAgence.ID%5D),MARSA",
    "https://xe76tb0x53a4uz8.eu.qlikcloud.com/single/?appid=d1b9ca8f-0c1f-4f77-8537-25c1c2e817ce&sheet=595463ef-2adc-4845-bb3f-a9de2632a783&theme=my%20new%20theme&opt=ctxmenu,currsel&select=clearall&select=$::%3DIf(%5BAgence.ID%5D%3D'N%2FA'%2CNull()%2C%5BAgence.ID%5D),MARSA"
  ]

  const iframesSfax = [
    "https://xe76tb0x53a4uz8.eu.qlikcloud.com/single/?appid=d1b9ca8f-0c1f-4f77-8537-25c1c2e817ce&sheet=4c74bbaf-f7a8-4ff2-804d-8aab5f965e76&theme=my%20new%20theme&opt=ctxmenu,currsel&select=clearall&select=$::%3DIf(%5BAgence.ID%5D%3D'N%2FA'%2CNull()%2C%5BAgence.ID%5D),MARSA",
    "https://xe76tb0x53a4uz8.eu.qlikcloud.com/single/?appid=d1b9ca8f-0c1f-4f77-8537-25c1c2e817ce&sheet=73bb7b3d-5229-48e9-af4a-f2b46c5eb759&theme=my%20new%20theme&opt=ctxmenu,currsel&select=clearall&select=$::%3DIf(%5BAgence.ID%5D%3D'N%2FA'%2CNull()%2C%5BAgence.ID%5D),MARSA",
    "https://xe76tb0x53a4uz8.eu.qlikcloud.com/single/?appid=d1b9ca8f-0c1f-4f77-8537-25c1c2e817ce&sheet=0e592310-3015-4d33-aaf3-6daf1f085598&theme=my%20new%20theme&opt=ctxmenu,currsel&select=clearall&select=$::%3DIf(%5BAgence.ID%5D%3D'N%2FA'%2CNull()%2C%5BAgence.ID%5D),MARSA",
    "https://xe76tb0x53a4uz8.eu.qlikcloud.com/single/?appid=d1b9ca8f-0c1f-4f77-8537-25c1c2e817ce&sheet=726cfdf3-b93d-4887-b8e0-8e37b6812b1e&theme=my%20new%20theme&opt=ctxmenu,currsel&select=clearall&select=$::%3DIf(%5BAgence.ID%5D%3D'N%2FA'%2CNull()%2C%5BAgence.ID%5D),MARSA",
    "https://xe76tb0x53a4uz8.eu.qlikcloud.com/single/?appid=d1b9ca8f-0c1f-4f77-8537-25c1c2e817ce&sheet=595463ef-2adc-4845-bb3f-a9de2632a783&theme=my%20new%20theme&opt=ctxmenu,currsel&select=clearall&select=$::%3DIf(%5BAgence.ID%5D%3D'N%2FA'%2CNull()%2C%5BAgence.ID%5D),MARSA"
  ]
  
  useEffect(()=> {  
    
    //console.log(localStorage.getItem("dashboard"))
    if (user.userInfo.agence.libelle === 'Marsa') {
      setIframes(iframesMarsa);
    }
    else if (user.userInfo.agence.libelle === 'Sousse') {
      setIframes(iframesSousse);
    }
    else if (user.userInfo.agence.libelle === 'Kalaa') {
      setIframes(iframesKalaa);
    } else {
      setIframes(iframesSfax);
    }
   
    },[])

 const goToPrevSlide = () => {

   const newPointer = currentIndex === 0 ? titles.length - 1 : parseInt(currentIndex) - 1;
   setCurrentIndex(newPointer);
   localStorage.removeItem('dashboard');
   localStorage.setItem("dashboard",newPointer)

 }

 const goToNextSlide = () => {
   
   const newPointer = currentIndex === titles.length - 1 ? 0 : parseInt(currentIndex) + 1;
   setCurrentIndex(newPointer);
   localStorage.removeItem('dashboard');
   localStorage.setItem("dashboard",newPointer)

 }

 return (
   <div>
     <NavBar component="Dashboard" />
     <h2 id='h2id'>Dashboard</h2>
     <hr></hr>
     <h1 id='title2'> {titles[currentIndex]} </h1>
     <h2 id='h2id' style={{marginBottom:"7px", fontSize:'medium', marginTop:'-10px'}}>Agence: {user.userInfo.agence.libelle}</h2>
     <hr style={{marginTop:'-5px'}}></hr>
     <button className="arrowbutton" onClick={goToPrevSlide}>&#10094;</button>
     <button className="arrowbutton" onClick={goToNextSlide}>&#10095;</button>
     <div>
     <iframe src={iframes[currentIndex]} ></iframe>
     </div>

   </div>

 )
}
