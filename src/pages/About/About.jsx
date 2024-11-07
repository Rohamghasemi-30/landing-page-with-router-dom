import React from 'react'
import "./About.css"
import Navbar from '../../components/Navbar/Navbar'
import HeaderAbout from '../../components/HeaderAbout/HeaderAbout'
import SecondeHeaderAbout from '../../components/SecondeHeaderAbout/SecondeHeaderAbout'
import MyTeam from '../../components/MyTeam/MyTeam'
import Footer from '../../components/footer/footer'

function About() {
  return (
    <div className='container-about'>
        <Navbar />
        <HeaderAbout />
        <SecondeHeaderAbout />
        <MyTeam />
        <Footer />
    </div>
  )
}

export default About