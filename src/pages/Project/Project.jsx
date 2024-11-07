import React from 'react'
import "./Project.css"
import Navbar from '../../components/Navbar/Navbar'
import HeaderProjects from '../../components/HeaderProjects/HeaderProjects'
import ListGame from '../../components/ListGame/ListGame'
import ListOfSiteProjects from '../../components/ListOfSiteProjects/ListOfSiteProjects'
import Footer from '../../components/footer/footer'

function Project() {
  return (
    <div className='container-project'>
      <Navbar />
      <HeaderProjects /><br /><br />
      <ListGame />
      <ListOfSiteProjects /><br /><br />
      <Footer />
    </div>
  )
}

export default Project