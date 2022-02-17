import React from "react";
import { useEffect, useRef, useState } from 'react';
import { Link, useLocation  } from 'react-router-dom';
import { BiHomeHeart} from 'react-icons/bi';
import { MdEventNote } from 'react-icons/md';
import { BsCalendarCheck } from 'react-icons/bs';
import './LeftNavBar.css';
import { AiTwotoneSetting } from 'react-icons/ai';
import { FaUserCircle } from 'react-icons/fa';
import { IoMdArrowDropdown } from 'react-icons/io';
//왼쪽네브바 아이템
const LeftNavBarItems = [
  {
    display: '홈',
    icon: <BiHomeHeart />,
    to: '/Main',
    section: ''
  },
  {
    display: '알림장',
    icon: <MdEventNote />,
    to: 'Blank',
    section: ''
  },
  {
    display: '공지사항',
    icon: <BsCalendarCheck />,
    to: '/Notice',
    section: ''
  },
];


const LeftNavBar = () => {
      const [activeIndex, setActiveIndex] = useState(0);
      const [stepHeight, setStepHeight] = useState(0);
      const sidebarRef = useRef();
      const indicatorRef = useRef();
      const location = useLocation();

  useEffect(()=> {
    setTimeout(()=> {
      const LeftNavBarItem = sidebarRef.current.querySelector('LeftNavBarItems');
      indicatorRef.current.style.height = `${LeftNavBarItem.clientHeight}px`;
      setStepHeight(LeftNavBarItem.clientHeight);
    }, 50);
  }, []);

  // chang active index
  useEffect(()=> {
    const curPath = window.location.pathname.split('/')[1];
    const activeItem = LeftNavBarItems.findIndex(item => item.section === curPath);
    setActiveIndex(curPath.length === 0 ? 0 : activeItem);
  }, [location]);

return(
  <div className='leftNavBar'>
    <div className='navUser'>
      <span className='navSetting'><AiTwotoneSetting/></span>
      <span className='navUserImg'><FaUserCircle /></span>
      <div className='navUserName'>교사</div>
      <div className='navDropdown'>
        <button className='dropDownBtn'>교사<IoMdArrowDropdown /></button>
        <div className='navDropdown-Content'>
          <div>원장</div>
          <div>비담임교사</div>
          <div>연장교사</div>
        </div>
      </div>
    </div>
    <div className='navLogo'></div>
    <div ref ={sidebarRef} className ='leftNavBarMenu'>
      <div ref={sidebarRef}
           className='MenuIndicator'
           style={{transform: `translateX(-50%) translateY(${activeIndex * stepHeight}px)`
        }}></div>
       { 
       LeftNavBarItems.map((item, index) =>(
         <Link to={item.to} key={index}>
           <div className = {`LeftNavBarMenuItem ${activeIndex === index ? 'active' : ''}`}>
             <div className='LeftNavBarMenuItemIcon'>
               {item.icon}
             </div>
             <div className='LeftNavBarMenuItemText'>
               {item.display}
             </div>
           </div>
         </Link>
       ))
       }
    </div>
  </div>
  )
};

export default LeftNavBar;