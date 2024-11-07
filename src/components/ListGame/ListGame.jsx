import React from 'react'
import "./ListGame.css"

function ListGame() {
  return (
    <div className='seconde-header'>
        <h1>List <span className='text-Game'>Game</span></h1><br /><br />
        <div className="card-game">
            <div className="card">
                <img src="../src/assets/images/clash.png" alt="" />
                <h3>clash of clans</h3>
                <p>Clash of Clans is a 2012 free-to-play mobile strategy video game developed and published by the Finnish game-development company Supercell.</p>
                <a href="#">download</a>
            </div>
            <div className="card">
                <img src="../src/assets/images/callofduty.webp" alt="" />
                <h3>call of duty mobile</h3>
                <p>Clash of Clans is a 2012 free-to-play mobile strategy video game developed and published by the Finnish game-development company Supercell.</p>
                <a href="#">download</a>
            </div>
            <div className="card">
                <img src="../src/assets/images/pubgmobile.png" alt="" />
                <h3>pubg mobile</h3>
                <p>Clash of Clans is a 2012 free-to-play mobile strategy video game developed and published by the Finnish game-development company Supercell.</p>
                <a href="#">download</a>
            </div>
        </div><br /><br />
        <div className="card-game">
            <div className="card">
                <img src="../src/assets/images/freefire.png" alt="" />
                <h3>free fire</h3>
                <p>Clash of Clans is a 2012 free-to-play mobile strategy video game developed and published by the Finnish game-development company Supercell.</p>
                <a href="#">download</a>
            </div>
            <div className="card">
                <img src="../src/assets/images/super.jpeg" alt="" />
                <h3>super mario</h3>
                <p>Clash of Clans is a 2012 free-to-play mobile strategy video game developed and published by the Finnish game-development company Supercell.</p>
                <a href="#">download</a>
            </div>
            <div className="card">
                <img src="../src/assets/images/assassens-creed.avif" alt="" />
                <h3>Assassins creed</h3>
                <p>Clash of Clans is a 2012 free-to-play mobile strategy video game developed and published by the Finnish game-development company Supercell.</p>
                <a href="#">download</a>
            </div>
        </div><br /><br />
        <h3><a href="#" className='more'>more game</a></h3> 
    </div>
  )
}

export default ListGame