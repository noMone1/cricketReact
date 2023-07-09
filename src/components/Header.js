import React from 'react'
import logo from './images-removebg-preview.png';
import Modal from './modal/Modal'
import { useState } from 'react';
const Header = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(!showModal);
  };
  
  return (
    
    <nav className="navbar navbar-expand-lg navbar-light ">
      {<Modal showModal={showModal} handleOpenModal={handleOpenModal} />}
      <a className="navbar-brand" href="#">
        <img src={logo} alt="Logo"/>
        <span style={{color:"red"}}>EAGLE 75</span>
      </a>
      <button className="navbar-toggler" type="button" aria-controls="navbarNav" aria-expanded="false"
        aria-label="Toggle navigation">
        <a className="btn btn-danger" onClick={handleOpenModal}>LOGIN <i className="fa fa-sign-in"></i></a>
      </button>
      <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            
            <a className="btn btn-danger" onClick={handleOpenModal}>LOGIN <i className="fa fa-sign-in"></i></a>
          </li>
        </ul>
      </div>
      
    </nav>
    
  )
}

export default Header