import React from 'react';

function Footer() {
  return (
    <div
      style={{
        height: '80px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '1rem'
      }}
    >
      <small class='text-white-50'>Made by Christos Malamas</small>
    </div>
  );
}

export default Footer;
