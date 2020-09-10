import React from 'react';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';

const Navbar = (props) => {
  return(
    <>
        <div className="navbar">
            <Link to="#" className="menu-bars">
                <FaIcons.FaBars />
            </Link>
        </div>
    </>
   )

 }

export default Navbar