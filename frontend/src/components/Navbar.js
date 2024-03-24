import React from 'react'
import { useState} from 'react'
import './CSS/navbar.css'
import{Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
      const[login,Setlogin]=useState(false);
      const navigate=useNavigate();
      function clickHandler(){
            navigate('/home/login');
      }
  return (
      <div className='navbar'>
          
                  <div className="nav1">
                  
                        <img src="https://raw.githubusercontent.com/Vaibhav-sh27/SongApp-Frontend/38a2291e2ec6187ab7046aae7960f605347782e0/src/components/assets/img/headphonesLogo.svg" className='logoimage' alt="" />
                        <p className='logo'>MUSIC X</p>
                  </div>

            <div className="section">
                  <input type="text" name='search' id='search' placeholder='Search Here...'></input>
                  {
                        login===true?<span >Love</span>:<Link id='login' onClick={clickHandler} to="/home/login">Login</Link>
                  }
            </div>
      </div>
  )
}

export default Navbar
