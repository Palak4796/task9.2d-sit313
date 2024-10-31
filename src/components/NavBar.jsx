import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import LogoutButton from './LogoutButton';

import './NavBar.css';

const NavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [postMessageVisible, setPostMessageVisible] = useState(false);
  const [postMessage, setPostMessage] = useState('');

  // Unified navigate function to handle navigation
  const navigateTo = (path) => {
    setPostMessageVisible(false);
    setPostMessage('');
    navigate(path);
  };

  // Handle Home click
  const handleHomeClick = () => navigateTo('/home');

  // Handle Post click
  const handlePostClick = () => navigateTo('/login');

  // Handle Find click
  const handleQuestionClick = () => navigateTo('/Question');

  // Handle Plans click for the new pricing page
  const handlePlansClick = () => navigateTo('/pricing');

  // Reset post message if the location changes
  useEffect(() => {
    if (location.pathname !== '/') {
      setPostMessageVisible(false);
      setPostMessage('');
    }
  }, [location]);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-brand" onClick={handleHomeClick}>
          DEV@Deakin
        </div>
        <div className="navbar-items">
          <input type="text" placeholder="Search..." className="navbar-search" />
          <button className="navbar-button" onClick={handleHomeClick}>
            Home
          </button>
          <button className="navbar-button" onClick={handlePostClick}>
            Post
          </button>
          <button className="navbar-button" onClick={handleQuestionClick}>
            Find
          </button>
          <button className="navbar-button" onClick={handlePlansClick}>
            Plans
          </button>
          <LogoutButton />
        </div>
      </nav>
      <div className="content">
        {postMessageVisible && <p className="post-message">{postMessage}</p>}
      </div>
    </>
  );
};

export default NavBar;
