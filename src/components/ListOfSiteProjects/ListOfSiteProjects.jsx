import React from 'react'
import "./ListOfSiteProjects.css"

function ListOfSiteProjects() {
  return (
    <div className='list-site'>
    <h1>List of site<span className='text-Game'> Projects</span></h1><br /><br />
    <div className="card-game">
        <div className="card">
            <img src="../src/assets/images/logo-amazoon.webp" alt="" />
            <h3>amazon</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum libero alias ratione quidem reiciendis omnis iure impedit dolore praesentium eius eveniet non ipsum, placeat vitae deserunt in aut. Ad, facere!</p>
            <a href="#">visit</a>
        </div>
        <div className="card">
            <img src="../src/assets/images/logo-freelancer.svg" alt="" />
            <h3>freelancer</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum libero alias ratione quidem reiciendis omnis iure impedit dolore praesentium eius eveniet non ipsum, placeat vitae deserunt in aut. Ad, facere!</p>
            <a href="#">visit</a>
        </div>
        <div className="card">
            <img src="../src/assets/images/freepik.svg" alt="" />
            <h3>freepik</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum libero alias ratione quidem reiciendis omnis iure impedit dolore praesentium eius eveniet non ipsum, placeat vitae deserunt in aut. Ad, facere!</p>
            <a href="#">visit</a>
        </div>
    </div><br /><br />
    <div className="card-game">
        <div className="card">
            <img src="../src/assets/images/adobe-logo.png" alt="" />
            <h3>adobe</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum libero alias ratione quidem reiciendis omnis iure impedit dolore praesentium eius eveniet non ipsum, placeat vitae deserunt in aut. Ad, facere!</p>
            <a href="#">visit</a>
        </div>
        <div className="card">
            <img src="../src/assets/images/Vitejs-logo.svg.png" alt="" />
            <h3>vite</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum libero alias ratione quidem reiciendis omnis iure impedit dolore praesentium eius eveniet non ipsum, placeat vitae deserunt in aut. Ad, facere!</p>
            <a href="#">visit</a>
        </div>
        <div className="card">
            <img src="../src/assets/images/logo-react.png" alt="" />
            <h3>React</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum libero alias ratione quidem reiciendis omnis iure impedit dolore praesentium eius eveniet non ipsum, placeat vitae deserunt in aut. Ad, facere!</p>
            <a href="#">visit</a>
        </div>
    </div><br /><br />
</div>
  )
}

export default ListOfSiteProjects