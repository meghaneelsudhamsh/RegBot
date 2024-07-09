// Footer.js
import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer style={footerStyle}>
      <center><p>&copy; 2024 Registration Info Dept ChatBot</p></center>
      <div style={rightCornerStyle}>
        <Link to="/connect">
          <button style={buttonStyle}>Reach Us</button>
        </Link>
      </div>
    </footer>
  );
}

const footerStyle = {
  display: 'flex',
  // justifyContent: 'space-between',
  // alignItems: 'center',
  // padding: '15px',
  // position: 'relative',
};

const rightCornerStyle = {
  position: 'absolute',
  right: '2px',
};

const buttonStyle = {
  // padding: '10px 20px',
  fontSize: '12px',
  backgroundColor: 'black',
  color: 'white',
  border: 'none',
  
  // cursor: 'pointer',
  
};

export default Footer;
