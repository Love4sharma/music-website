import React from 'react'
import './CSS/main.css'
import {Link}  from 'react-router-dom';
const Main = () => {
  return (
    <div className='container'>
      <div className="box11">
            <p className='logo1'>MUSIC X</p>
            
      </div>
      <div className="box21">
            <div className="headphone">
                  <img src="https://raw.githubusercontent.com/Vaibhav-sh27/SongApp-Frontend/38a2291e2ec6187ab7046aae7960f605347782e0/src/components/assets/img/headphones.svg" alt="" />
            </div>
            <div className="text">
            <h1 className='music'>Music for everyone</h1>
            <p className='mistake'>Without music, life would be a mistake</p>
            
            <Link  className="button-31" to="/home">Start Listening</Link>
            </div>
      </div>
    </div>
  )
}

export default Main
