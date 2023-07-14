import React from 'react';
import { Dropdown } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
// import JSON from 'json'

const ProfileDropdown = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    // const navigate = useNavigate();
    const logout = ()=>{
        localStorage.removeItem('user')
        localStorage.removeItem('access_token');
        localStorage.removeItem('isAdmin')
        window.location.reload();
    }
  return (
    <Dropdown>
      <Dropdown.Toggle variant="danger" id="profile-dropdown" >
        <span className=''>
        <i className="fa fa-user-circle" aria-hidden="true" style={{marginRight:"2px"}}></i>{user?.name ||""} </span>
      </Dropdown.Toggle>

      <Dropdown.Menu style={{background:"white"}} >
        <Dropdown.Item href="#profile" ><b>Profile</b></Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item href="#settings"><b>Settings</b></Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item onClick={logout}><b>Logout</b></Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default ProfileDropdown;
