import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Example({ showModal, handleOpenModal }) {
  // const [show, setShow] = useState(true);

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  return (
    <>
     <Modal
  show={showModal}
  onHide={handleOpenModal}
  backdrop="static"
  keyboard={false}
  
>
  <Modal.Header closeButton style={{background:"#480760"}}>
    <Modal.Title style={{color:"white"}}><b>Login To Continue</b></Modal.Title>
  </Modal.Header>
  <Modal.Body style={{background:"#480760"}}>
    <form>
      <div className="mb-3" >
        <label htmlFor="username" className="form-label" style={{color:"white" }}><b>Username</b></label>
        <input type="text" className="form-control" id="username" placeholder='Enter Username' />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label" style={{color:"white"}}><b>Password</b></label>
        <input type="password" className="form-control" id="password" placeholder='Enter Password'/>
      </div>
    </form>
  </Modal.Body>
  <Modal.Footer style={{background:"#480760"}}>
    <Button variant="secondary" onClick={handleOpenModal}>
      Close
    </Button>
    <Button variant="danger" >Login <i className="fa fa-sign-in"></i></Button>
  </Modal.Footer>
</Modal>

    </>
  );
}

export default Example;