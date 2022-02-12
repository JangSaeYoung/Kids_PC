import React from "react";
import { AiFillBell } from 'react-icons/ai';
import {FaUserCircle} from 'react-icons/fa';
import './Header.css';

const Header = () => {

return(
  <nav className="Nav">
    <div className="navWrap">
       <img className="logoImg" alt='logo img' src='img/kidsLogo.png' />
       <span className='logoText'>Yes어린이집</span>
    </div>
    <div className='navRightWrap'>
        <span className='kidsMenu'>알림장</span>
        <span className='kidsMenu'>문서</span>
        <span className='kidsMenu'>스토어</span>
        <span className='noticBell'><AiFillBell /></span>
        <span className='user'><FaUserCircle /></span>
    </div>
  </nav>
  )
};

export default Header;