import React from 'react';

const NotFound = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1 style={{ fontSize: '2em', color: '#FF6347' }}>404 ERROR : Page Not Found</h1>
      <img src="./images/404.png" alt="404 Error" style={{ maxWidth: '100%', height: '100%' }} />
    </div>
  );
}

export default NotFound;
