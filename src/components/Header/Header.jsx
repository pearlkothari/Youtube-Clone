import React from 'react'
import {FaBars} from "react-icons/fa"
import {AiOutlineSearch} from "react-icons/ai"
import {MdNotifications,MdApps} from "react-icons/md"
import './Header.scss'
import youtube_logo from '../../icons/youtube_logo.png';


function Header() {
  return (
    <div className='header border border-dark'>
      <FaBars className='Header-Bar'size={20}></FaBars>
      <img 
        src={youtube_logo} 
        alt="YouTube" 
        className="youtube_logo" 
      />

      <form>
        <input type="text" placeholder='Search' />
        <button type='submit'>
            <AiOutlineSearch size={22}/>
        </button>
      </form>

      <div className="_icons">
        <MdNotifications size={22}/>
        <MdApps size={22}/>
        <img src="https://www.w3schools.com/w3images/avatar2.png" alt="avatar" className="avatar" />
      </div>
    </div>
  )
}

export default Header