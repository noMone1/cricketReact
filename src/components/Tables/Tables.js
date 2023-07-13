import React from "react";
import Button from 'react-bootstrap/Button';
import AddUser from "../modal/AddUser";
import config from '../../config/config'
import { useEffect,useState } from "react";
function Table({ apiROute, schema, filter, isModalOpen }) {
    const [data,setData] = useState([]);
    const [item,setItem] = useState({});
    const [showModal, setShowModal] = useState(false);

    const handleOpenModal = (item) => {
        setItem(item)
      setShowModal(!showModal);
    };

  const handleInputChange = (event) => {
   
  };
  const fetchData = async () => {
    try {
        const response = await fetch(config.BASE_URL+'api/tenant/users',
        {headers: {
            access_token: `
            eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDhhZGYxMzhlYjdkZDY4NGRmZDNmYTEiLCJlbWFpbCI6InNhbXBsZUB5b3BtYWlsLmNvbSIsImNvbXBhbnlfaWQiOiIyNjYiLCJyb2xlIjoidXNlciIsIm91ckhybXNGbGFnIjp0cnVlLCJpYXQiOjE2ODkxMzg3NDQsImV4cCI6MTY4OTMxMTU0NH0.BEiU2xYaroYtvX5lc3Tw2sCvdeu50gd9r35ryMUavEQ
            ` }});
        const data = await response.json();
        // console.log(data.users);  
        setData(data.users); // Update the state with the fetched data
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};
  useEffect(() => {
    fetchData();
}, []);
  return (
    
    <section className="content">
       
      <div className="content-header mt-1">
      <div className="container-fluid">
      <div className="row m-0">
      <div className="col-sm-6">
      <ol className="breadcrumb" style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <li>
          <button
            className="btn btn-primary"
            type="button"
            onClick={handleOpenModal}
            data-toggle="modal"
            data-target="#exampleModalCenter" >
            <i className="fa fa-plus"></i> Add
          </button>
        </li>
      </ol>
    </div>
  </div>
</div>
      </div>

        {<AddUser showModal={showModal} handleOpenModal={handleOpenModal} item={item}/>}
      <div className={`container-fluid`}>
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-header">
                <div className="card-title " style={{display:"flex", maxHeight:"40px"}}>
                  <input
                    type="text"
                    name="table_search"
                    id="search_text"
                    
                    className="form-control float-right ml-2"
                    placeholder="Type to search"
                    onKeyUp={(event) => handleInputChange(event.target.value)}
                  />
                </div>
                {/* filter will always be placed here.. */}
                {/* <Filters filter={filter}/> */}
              </div>

              <div className="card-body table-responsive p-0">
                <table className="table table-bordered table-hover">
                  <thead>
                    <tr>
                      <th>Id</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Phone</th>
                      <th>Wallet</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((item,index) =>(

                    <tr>
                      <td>{item._id}</td>
                      <td>{item.name}</td>
                      <td>{item.email}</td>
                      <td>{item.phone}</td>
                      <td>{item.wallet}</td>
                      <td onClick={()=>{handleOpenModal(item)}}><Button variant="danger" size="sm"><i className='fa fa-edit'/>Update</Button></td>
                    </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Table;
