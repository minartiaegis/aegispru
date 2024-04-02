import React from 'react'
import './Headers.css'
import { useLocation, useNavigate } from 'react-router-dom';

export const Headers = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleHomeClick = () => {
    // Use navigate to go to the home route
    navigate('/');
  };

  const handleCareerClick = () => {
    // Use navigate to go to the home route
    navigate('/career');
  };

  const handleContactClick = () => {
    // Use navigate to go to the home route
    navigate('/contactus');
  };
  return (
    <div className='headers'>
        <div className='logo'>
            <h1 className='aegis'>AEGIS</h1>
        </div>
        <div className='navbar'>
            <ul className='navbarItem'>
                <li className='listNav'>
                  <button 
                    className={`btnHeader ${location.pathname === '/' ? '' : ''}`}
                    onClick={handleHomeClick}
                    id='cursor'
                  >
                      Home
                  </button>
                </li>
                <li className='listNav'>
                <button 
                    className={`btnHeader ${location.pathname === '/career' ? '' : ''}`}
                    onClick={handleCareerClick}
                    id='cursor'
                  >
                      Career
                  </button>
                </li>
                <li className='listNav'>
                <button 
                    className={`btnHeader ${location.pathname === '/career' ? '' : ''}`}
                    onClick={handleContactClick}
                    id='cursor'
                  >
                      Contact Us
                  </button>
                </li>
            </ul>
        </div>
        <div className='gapHeader'></div>
    </div>
  )
}
