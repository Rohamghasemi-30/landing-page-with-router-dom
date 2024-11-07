import React from 'react'
import "./SliderHome.css"

function SliderHome() {
  return (
    <div className='container'>
    <div className="text">
    <h1>Game <span className='center-title'>center</span></h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis doloremque dolor enim? Atque iure saepe cupiditate provident iste laborum ipsam consectetur quibusdam quae sequi odio perferendis dolorum numquam, possimus cumque!
    Consectetur, nostrum facilis. Quibusdam provident voluptatem culpa repellendus nihil mollitia, deserunt earum ducimus architecto voluptatum sapiente ratione officiis qui dolorum fugiat maiores, aliquam nisi sequi. Facilis suscipit sint facere perferendis.</p>
    <a href="#" className='more'>more</a>
    </div>
    <img src="../src/assets/images/image-header-project.png" alt="" className='image-project' />
    </div>
  )
}

export default SliderHome