import React, {} from 'react';
import "./Header.css"
import "../../Helper.css"
import { Link } from 'react-router-dom';
const Header = () => {
  
    return (
      <div className='header #ff80ab pink accent-1'>
        <div className='container'>
          <div className='header-title'>
              <span>
                Object-Oriented Mall
              </span>
          </div>
          <div className='header-links'>
            <Link to="/" className='main-text-Color'>
              Home
            </Link>
            <Link to="/parking-slots" className='pad-left-20 main-text-Color '>
              Parking Slots
            </Link> 
            <Link to="" className='pad-left-20 main-text-Color'>
              Summary Reports
            </Link> 
          </div>  
        </div>
        
      </div>
  );
}
export default Header;