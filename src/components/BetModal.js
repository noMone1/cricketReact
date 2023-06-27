import React,{useState} from 'react'

const BetModal = (props) => {
  const {color} = props
  const [quantity, setQuantity] = useState(1);
  const [quantity2, setQuantity2] = useState(1);

  const handleDecrease = (num) => {
    if(num===1){
    if (quantity > 0) {
      setQuantity(quantity - 0.01);
    }
  }
    if(num===2){
      setQuantity2(quantity2/2);
  }
  };

  const handleIncrease = (num) => {
    if(num===1){
    setQuantity(quantity + 0.01);
    }
    if(num===2){
    setQuantity2(quantity2 +(quantity2*2) );
    }
  };
  return (
    <div   style={{background: color}}>
    <div className="row p-1">
      <div className="col-6">
        <div className="input-group input-group-lg mb-3 p-0" width="full">
            <button id="minusButton1" type="button" style={{background:"#827879"}} className="btn btn-light btn-lg"
            onClick={()=>handleDecrease(1)} data-field="quantity1">
              <i className="fa fa-minus" />
            </button>
          <input type="text" className="form-control input-number" name="quantity1" value={quantity}  min={0} step="0.01" style={{padding:"0"}} />
          
            <button id="plusButton1" type="button" style={{background:"#827879"}} className="btn btn-light btn-block" 
            onClick={()=>handleIncrease(1)} data-field="quantity1">
              <i className="fa fa-plus" />
            </button>
          
        </div>
      </div>
      <div className="col-6">
        <div className="input-group input-group-lg mb-3">
          
            <button id="minusButton2" type="button" style={{background:"#827879"}} className="btn btn-light btn-lg" 
            onClick={()=>handleDecrease(2)} data-field="quantity2">
              <i className="fa fa-minus" />
            </button>
          <input type="text" className="form-control input-number" name="quantity2" value={quantity2} min={0} step="0.01" style={{padding:"0"}} />
            <button id="plusButton2" type="button" style={{background:"#827879"}} className="btn btn-light btn-lg"
            onClick={()=>handleIncrease(2)} data-field="quantity2">
              <i className="fa fa-plus" />
            </button>
        </div>
      </div>
    </div>
    <div className="row mb-3 p-1">
      <div className="col-3">
        <button type="button" className="btn btn-light w-100 " style={{borderRadius: '10px',background:"#918d8d"}} onClick={()=>setQuantity2(1000)}>1000</button>
      </div>
      <div className="col-3">
        <button type="button" className="btn btn-light w-100" style={{borderRadius: '10px',background:"#918d8d"}} onClick={()=>setQuantity2(5000)}>5000</button>
      </div>
      <div className="col-3">
        <button type="button" className="btn btn-light w-100" style={{borderRadius: '10px',background:"#918d8d"}} onClick={()=>setQuantity2(10000)}>10000</button>
      </div>
      <div className="col-3">
        <button type="button" className="btn btn-light w-100" style={{borderRadius: '10px',background:"#918d8d"}} onClick={()=>setQuantity2(20000)}>20000</button>
      </div>
    </div>
    <div className="row mb-3 p-1">
      <div className="col-3">
        <button type="button" className="btn btn-light w-100" style={{borderRadius: '10px',background:"#918d8d"}} onClick={()=>setQuantity(50000)}>50000</button>
      </div>
      <div className="col-3">
        <button type="button" className="btn btn-light w-100" style={{borderRadius: '10px',background:"#918d8d"}} onClick={()=>setQuantity(100000)}>100000</button>
      </div>
      <div className="col-3">
        <button type="button" className="btn btn-light w-100" style={{borderRadius: '10px',background:"#918d8d"}} onClick={()=>setQuantity(200000)}>200000</button>
      </div>
      <div className="col-3">
        <button type="button" className="btn btn-light w-100" style={{borderRadius: '10px',background:"#918d8d"}} onClick={()=>setQuantity(500000)}>500000</button>
      </div>
    </div>
    <div className="row p-1">
      <div className="col-6 d-flex justify-content-start">
        <button id="cancelButton" type="button" className="btn btn-light btn-lg w-100">Cancel</button>
      </div>
      <div className="col-6 d-flex justify-content-end">
        <button type="button" className="btn btn-danger btn-lg w-100">Place Bet</button>
      </div>
    </div>
  </div>
  )
}

export default BetModal