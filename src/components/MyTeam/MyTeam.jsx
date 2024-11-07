import React from 'react'
import "./MyTeam.css"

function MyTeam() {
  return (
    <div className='myteam'>
        <h1>my <span className='text-myteam'>team</span></h1><br /><br />
        <div className="card-team">
            <div className="card">
                <img src="../src/assets/images/man.jpg" alt="" />
                <h3>alex</h3>
                <h4>Alex is the CEO of Game Center</h4>
            </div>
            <div className="card">
                <img src="../src/assets/images/man.jpg" alt="" />
                <h3>Ali</h3>
                <h4>Alex is the CEO of Game Center</h4>
            </div>
            <div className="card">
                <img src="../src/assets/images/man.jpg" alt="" />
                <h3>terever</h3>
                <h4>Alex is the CEO of Game Center</h4>
            </div>
        </div><br /><br />
    </div>
  )
}

export default MyTeam