import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { toast } from "react-toastify";
import config from '../../config/config'
import Spinner from '../Spinner/Spinner'
import { loginVisible } from '../../Atoms/Globals';
import { useAtom } from 'jotai';
import { useNavigate } from 'react-router-dom';

function Example({ showModal, handleOpenModal }) {
    const navigate = useNavigate();
  const [login,setLogin] = useAtom(loginVisible)
  const [res,setRes] = useState(false)
  const saveData = async () => {
    setRes(true)
    try {
      const formInputs = document.querySelectorAll("#userForm input");
      const userObject = {};
      formInputs.forEach((input) => {
        const { name, value } = input;
        userObject[name] = value;
      });
      var head = "";
      if (formInputs.length <= 4) {
        head = `/login`;
      }
      var response = await fetch(
        config.BASE_URL+"api/auth" + head,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userObject),
        }
      );
      //    response = await response.json();
      if (response.ok) {
        setRes(false)
        setLogin(false)
        const data1 = await response.json();
        localStorage.setItem("access_token", data1.accessToken);
        localStorage.setItem("user", JSON.stringify(data1.user));
        localStorage.setItem("isAdmin",true);
        // handleOpenModal();

        toast.success("Logged in successfully!");
        navigate('/admin/list')
        
      } else if (response.status !== 500) {
        setRes(false)
        const data1 = await response.json();
        toast.warning(data1.message);
        // handleOpenModal();
        // updateChanged();
      }
    } catch (err) {
        console.error(err);
      setRes(false)
      toast.error("something went wrong");
    }
  };



  return (
    <>
     <Modal
  show={true}
  onHide={handleOpenModal}
  backdrop="static"
  keyboard={false}
>
  <Modal.Header closeButton style={{background:"#480760"}}>
    <Modal.Title style={{color:"white"}}><b>Login To Continue</b></Modal.Title>
  </Modal.Header>
  <Modal.Body style={{background:"#480760"}}>
    <form id="userForm">
      <div className="mb-3" >
        <label htmlFor="username" className="form-label" style={{color:"white" }}><b>Username</b></label>
        <input type="text" className="form-control" id="email" name="email" placeholder='Enter Username' />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label" style={{color:"white"}}><b>Password</b></label>
        <input type="password" className="form-control" name="password" id="password" placeholder='Enter Password'/>
      </div>
    </form>
  </Modal.Body>
  <Modal.Footer style={{background:"#480760"}}>
    <Button variant="secondary" onClick={handleOpenModal}>
      Close
    </Button>
    { !res && <Button variant="danger" onClick={saveData} >Login <i className="fa fa-sign-in"></i></Button>}
  </Modal.Footer>
</Modal>

    </>
  );
}

export default Example;