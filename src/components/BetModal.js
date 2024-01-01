import React,{useState} from 'react'
 const buttonData = [
    {  value: 100 },
    { value: 200 },
    {  value: 300 },
    {  value: 400 },
   
  ];
  const rowNum = [1,10,100]
const BetModal = (props) => {
  const {color,selectType} = props
  const [quantity, setQuantity] = useState(1);
  const [quantity2, setQuantity2] = useState(1);
  const [betActive, setBetActive] = useState(false);

  const handleDecrease = (num) => {
    let q = Number(quantity.toFixed(2));
    let q2 = Number(quantity2.toFixed(2));
    if(num===1){
    if (q >= 1.02) {
      
      setQuantity((q - 0.02));
    }
  }
    if(num===2){
      setQuantity2(q2>0?q2-1:0);
  }
  };
  const changeValue = (num)=>{
    selectType==='lay'?setQuantity2(num):setQuantity(num);
  }

  const handleIncrease = (num) => {
    let q = Number(quantity.toFixed(2)) + 0.02;
    let q2 = Number(quantity2.toFixed(2)) + 1;
    if(num===1){
    setQuantity(q );
    }
    if(num===2){
    setQuantity2(q2 );
    }
  };
  return (
    <div   style={{background: color}}>
    <div className="row p-1">
      <div className="col-6">
        <div className="input-group input-group-lg mb-3 p-0" width="full">
            <button id="minusButton1"  style={{background:"#caf5fa"}} 
            onClick={()=>handleDecrease(1)} data-field="quantity1">
              <i className="fa fa-minus" />
            </button>
          <input type="text" className="form-control input-number" name="quantity1" value={quantity.toFixed(2)}  min={0} style={{padding:"0"}} />
          
            <button id="plusButton1" type="button" style={{background:"#caf5fa"}}  
            onClick={()=>handleIncrease(1)} data-field="quantity1">
              <i className="fa fa-plus" />
            </button>
          
        </div>
      </div>
      <div className="col-6">
        <div className="input-group input-group-lg mb-3">
          
            <button id="minusButton2" type="button" style={{background:"#caf5fa"}} 
            onClick={()=>handleDecrease(2)} data-field="quantity2">
              <i className="fa fa-minus" />
            </button>
          <input type="text" className="form-control input-number" name="quantity2" value={quantity2} min={0} step="0.01" style={{padding:"0"}} />
            <button id="plusButton2" type="button" style={{background:"#caf5fa"}} 
            onClick={()=>handleIncrease(2)} data-field="quantity2">
              <i className="fa fa-plus" />
            </button>
        </div>
      </div>
    </div>
    {rowNum.map((value, index) => (
        <div key={index} className="row mb-3 p-1">
          {buttonData.map((item, innerIndex) => (
            <div key={innerIndex} className="col-3">
              <button
                type="button"
                className="btn btn-light w-100"
                style={{ borderRadius: '10px', background: 'white' }}
                onClick={() => changeValue(item.value * value)}
              >
                {item.value * value}
              </button>
            </div>
          ))}
        </div>
      ))}
    <div className="row p-1">
      <div className="col-6 d-flex justify-content-start">
        <button id="cancelButton" type="button" onClick={props.visibility} className="btn btn-light btn-lg w-100">Cancel</button>
      </div>
      <div className="col-6 d-flex justify-content-end">
        <button type="button " disabled={betActive?"true":"false"} className="btn btn-danger btn-lg w-100" style={{background:"red"}}>Place Bet</button>
      </div>
    </div>
  </div>
  )
}

export default BetModal