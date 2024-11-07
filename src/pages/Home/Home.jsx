import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import SliderHome from '../../components/SliderHome/SliderHome'
import ListGame from '../../components/ListGame/ListGame'
import Footer from '../../components/footer/footer'

function Home() {
  return (
    <div>
        <Navbar />
        <SliderHome />
        <ListGame /><br /><br />
        <Footer />
    </div>
  )
}

export default Home