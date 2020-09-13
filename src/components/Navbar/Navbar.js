import React, { useState } from "react";
import * as IoIcons from 'react-icons/io';
import * as AiIcons from 'react-icons/ai';
import * as FaIcons from 'react-icons/fa';
import { Link } from "react-router-dom";
// import { SidebarData } from "../../data/SidebarData";
import "./Navbar.css";
import { IconContext } from "react-icons";


const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: "#FFA43C" }}>
        <div className="navbar">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
            <h1 className="menu-bars logo">
              <a href="#home">EO</a>
            </h1>
            {/* <img src="https://res.cloudinary.com/elijjaaahhhh/image/upload/v1599819964/logo_znmnxv.png" alt="logo" /> */}
          
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {/* {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.className}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                  <a href={item.path} rel="link">{item.icon}<span>{item.title}</span></a>
                </li>
              );
            })} */}
            <li className='nav-text'>
              <a href="#about" rel="link">
              Home
              <span>
                <AiIcons.AiFillHome />
              </span>
              </a>
            </li>
            <li className='nav-text'>
              <a href="#projects" rel="link">
              Projects
              <span>
              <FaIcons.FaCode />
              </span>
              </a>
            </li>
            <li className='nav-text'>
              <a href="#tools" rel="link">
              Technologies
              <span>
              <FaIcons.FaTools />
              </span>
              </a>
            </li>
            <li className='nav-text'>
              <a href="#contactme" rel="link">
              Contact Me
              <span>
              <IoIcons.IoMdPeople />
              </span>
              </a>
            </li>
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
