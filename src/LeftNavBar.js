import React from "react";
import { useEffect, useRef, useState } from 'react';
import { Link, useLocation  } from 'react-router-dom';
import { BiHomeHeart} from 'react-icons/bi';
import { MdEventNote } from 'react-icons/md';
import { BsCalendarCheck } from 'react-icons/bs';
import './LeftNavBar.css';

const LeftNavBarItems = [
  {
    display: '홈',
    icon: <BiHomeHeart />,
    to: '/',
    section: ''
  },
  {
    display: '알림장',
    icon: <MdEventNote />,
    to: '/',
    section: ''
  },
  {
    display: '공지사항',
    icon: <BsCalendarCheck />,
    to: '/',
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