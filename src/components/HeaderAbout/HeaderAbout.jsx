import React from 'react'
import "./HeaderAbout.css"

function HeaderAbout() {
  return (
    <div className='header-about'>
    <div className="text">
    <h1>About <span className='center-title'>GameCenter</span></h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis doloremque dolor enim? Atque iure saepe cupiditate provident iste laborum ipsam consectetur quibusdam quae sequi odio perferendis dolorum numquam, possimus cumque!
    Consectetur, nostrum facilis. Quibusdam provident voluptatem culpa repellendus nihil mollitia, deserunt earum ducimus architecto voluptatum sapiente ratione officiis qui dolorum fugiat maiores, aliquam nisi sequi. Facilis suscipit sint facere perferendis.</p>
    </div>
    <img src="../src/assets/images/image-About.avif" alt="" />
    </div>
  )
}

export default HeaderAbout