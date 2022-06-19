import React from 'react'
import NavBar from '../Navbar/NavBar'
import './dashboard.scss'
import { useEffect, useState } from 'react'

export default function AdminDashboard() {

  /****** getting the current selected dashboard's index *****/
  const dashboardIndex = localStorage.getItem("dashboard");
  const [currentIndex, setCurrentIndex] = useState(dashboardIndex);

  const titles = [
    'Analyse 360',
    'Clients',
    'Articles',
    'Agences',
    'Collaborateurs',
    'Détails ventes'
  ]

  const iframes = [
    "https://xe76tb0x53a4uz8.eu.qlikcloud.com/single/?appid=d1b9ca8f-0c1f-4f77-8537-25c1c2e817ce&sheet=4c74bbaf-f7a8-4ff2-804d-8aab5f965e76&theme=my%20new%20theme&opt=ctxmenu,currsel&select=clearall",
    "https://xe76tb0x53a4uz8.eu.qlikcloud.com/single/?appid=d1b9ca8f-0c1f-4f77-8537-25c1c2e817ce&sheet=73bb7b3d-5229-48e9-af4a-f2b46c5eb759&theme=my%20new%20theme&opt=ctxmenu,currsel&select=clearall",
    "https://xe76tb0x53a4uz8.eu.qlikcloud.com/single/?appid=d1b9ca8f-0c1f-4f77-8537-25c1c2e817ce&sheet=0e592310-3015-4d33-aaf3-6daf1f085598&theme=my%20new%20theme&opt=ctxmenu,currsel&select=clearall",
    "https://xe76tb0x53a4uz8.eu.qlikcloud.com/single/?appid=d1b9ca8f-0c1f-4f77-8537-25c1c2e817ce&sheet=e4fe9742-0d99-4c45-904d-53c29971cb28&theme=my%20new%20theme&opt=ctxmenu,currsel&select=clearall",
    "https://xe76tb0x53a4uz8.eu.qlikcloud.com/single/?appid=d1b9ca8f-0c1f-4f77-8537-25c1c2e817ce&sheet=726cfdf3-b93d-4887-b8e0-8e37b6812b1e&theme=my%20new%20theme&opt=ctxmenu,currsel&select=clearall",
    "https://xe76tb0x53a4uz8.eu.qlikcloud.com/single/?appid=d1b9ca8f-0c1f-4f77-8537-25c1c2e817ce&sheet=595463ef-2adc-4845-bb3f-a9de2632a783&theme=my%20new%20theme&opt=ctxmenu,currsel&select=clearall"
  ]

 /* useEffect(() => {

    console.log(localStorage.getItem("dashboard"))

  }, [])*/

  const goToPrevSlide = () => {

    const newPointer = currentIndex === 0 ? titles.length - 1 : parseInt(currentIndex) - 1;
    setCurrentIndex(newPointer);
    localStorage.removeItem('dashboard');
    localStorage.setItem("dashboard", newPointer)
    //console.log(localStorage.getItem("dashboard"))
  }

  const goToNextSlide = () => {

    const newPointer = currentIndex === titles.length - 1 ? 0 : parseInt(currentIndex) + 1;
    setCurrentIndex(newPointer);
    //console.log(currentIndex);
    localStorage.removeItem('dashboard');
    //console.log(localStorage.getItem("dashboard"))
   // console.log(newPointer);
    localStorage.setItem("dashboard", newPointer)
   // console.log(localStorage.getItem("dashboard"))
  }

  return (
    <div>
      <NavBar component="Dashboard" />
      <h2 id='h2id'>Dashboard</h2>
      <hr></hr>
      <h1 id='title2'> {titles[currentIndex]} </h1>

      <button className="arrowbutton" onClick={goToPrevSlide}>&#10094;</button>
      <button className="arrowbutton" onClick={goToNextSlide}>&#10095;</button>
      <div >
      <iframe src={iframes[currentIndex]} ></iframe>
      </div>

    </div>

  )
}
