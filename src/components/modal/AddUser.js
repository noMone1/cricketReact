import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { toast } from "react-toastify";
import config from '../../config/config'
function AddUser({ showModal, handleOpenModal, item }) {
  item = item ? item : {};
  var method = "POST";
  const saveData = async () => {
    try {
      const formInputs = document.querySelectorAll("#userForm input");
      const userObject = {};
      formInputs.forEach((input) => {
        const { name, value } = input;
        userObject[name] = value;
      });
      var head = "";
      if (formInputs.length <= 4) {
        method = "PUT";
        head = `/${item._id}`;
      }
      var response = await fetch(
        config.BASE_URL+"api/tenant/users" + head,
        {
          method: method,
          headers: {
            "Content-Type": "application/json",
            access_token: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDhhZGYxMzhlYjdkZDY4NGRmZDNmYTEiLCJlbWFpbCI6InNhbXBsZUB5b3BtYWlsLmNvbSIsImNvbXBhbnlfaWQiOiIyNjYiLCJyb2xlIjoidXNlciIsIm91ckhybXNGbGFnIjp0cnVlLCJpYXQiOjE2ODkxMzg3NDQsImV4cCI6MTY4OTMxMTU0NH0.BEiU2xYaroYtvX5lc3Tw2sCvdeu50gd9r35ryMUavEQ
          `,
          },
          body: JSON.stringify(userObject),
        }
      );
      //    response = await response.json();
      if (response.ok) {
        const data1 = await response.json();
        handleOpenModal();
        toast.success(data1.message);
      } else if (response.status === 400) {
        const data1 = await response.json();
        console.log(data1.message);
        toast.warning(data1.message);
      }
    } catch (err) {
      toast.error("something went wrong");
    }
  };

  return (
    <>
      <Modal
        show={showModal}
        onHide={handleOpenModal}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton style={{ background: "#480760" }}>
          <Modal.Title style={{ color: "White" }}>
            <b>Add New User</b>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form id="userForm" onSubmit={saveData}>
            <div className="modal-body">
              <div className="form-group">
                <label>Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  required="required"
                  placeholder="Name"
                  defaultValue={item.name}
                />
              </div>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label>Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    required="required"
                    placeholder="Email"
                    defaultValue={item.email}
                  />
                </div>
                <div className="form-group col-md-6">
                  <label>Phone</label>
                  <input
                    type="text"
                    className="form-control"
                    id="phone"
                    name="phone"
                    required="required"
                    placeholder="Enter phone"
                    defaultValue={item.phone}
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label>Wallet</label>
                  <input
                    type="text"
                    className="form-control"
                    id="wallet"
                    required="required"
                    name="wallet"
                    defaultValue={item.wallet}
                    placeholder="Enter Wallet Balance"
                  />
                </div>
              </div>
              <div className="form-row">
                {!item.password && (
                  <div className="form-group col-md-6">
                    <label>Password</label>
                    <input
                      type="text"
                      className="form-control"
                      id="password"
                      required="required"
                      name="password"
                      defaultValue={item.password}
                      placeholder="Enter Password"
                    />
                  </div>
                )}
              </div>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer style={{ background: "#480760" }}>
          <Button variant="secondary" onClick={handleOpenModal}>
            Close
          </Button>
          <Button variant="danger" onClick={saveData}>
            Save <i className="fa fa-save"></i>
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddUser;
