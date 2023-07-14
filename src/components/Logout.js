import React from 'react';

const Logout = ({ onLogout }) => {
  localStorage.removeItem('user')
// localStorage.removeItem('accessToken')
// localStorage.removeItem('isAdmin')

  return (
    <button onClick={handleLogout}>Logout</button>
  );
};

export default Logout;
