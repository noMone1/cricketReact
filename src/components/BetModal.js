import React from 'react'

const BetModal = () => {
  return (
    <div   style={{background: '#95c0e6'}}>
    <div className="row p-1">
      <div className="col-6">
        <div className="input-group input-group-lg mb-3" width="full">
          <div className="input-group-prepend">
            <button id="minusButton1" type="button" className="btn btn-light btn-lg" data-field="quantity1">
              <i className="fa fa-minus" />
            </button>
          </div>
          <input type="text" className="form-control input-number" name="quantity1" defaultValue={1} min={0} step="0.01" width="full" />
          <div className="input-group-append">
            <button id="plusButton1" type="button" className="btn btn-light btn-lg" data-field="quantity1">
              <i className="fa fa-plus" />
            </button>
          </div>
        </div>
      </div>
      <div className="col-6">
        <div className="input-group input-group-lg mb-3">
          <div className="input-group-prepend">
            <button id="minusButton2" type="button" className="btn btn-light btn-lg" data-field="quantity2">
              <i className="fa fa-minus" />
            </button>
          </div>
          <input type="text" className="form-control input-number" name="quantity2" defaultValue={1} min={0} step="0.01" />
          <div className="input-group-append">
            <button id="plusButton2" type="button" className="btn btn-light btn-lg" data-field="quantity2">
              <i className="fa fa-plus" />
            </button>
          </div>
        </div>
      </div>
    </div>
    <div className="row mb-3 p-1">
      <div className="col-3">
        <button type="button" className="btn btn-light w-100 " style={{borderRadius: '10px'}}>1000</button>
      </div>
      <div className="col-3">
        <button type="button" className="btn btn-light w-100" style={{borderRadius: '10px'}}>5000</button>
      </div>
      <div className="col-3">
        <button type="button" className="btn btn-light w-100" style={{borderRadius: '10px'}}>10000</button>
      </div>
      <div className="col-3">
        <button type="button" className="btn btn-light w-100" style={{borderRadius: '10px'}}>20000</button>
      </div>
    </div>
    <div className="row mb-3 p-1">
      <div className="col-3">
        <button type="button" className="btn btn-light w-100" style={{borderRadius: '10px'}}>1000</button>
      </div>
      <div className="col-3">
        <button type="button" className="btn btn-light w-100" style={{borderRadius: '10px'}}>5000</button>
      </div>
      <div className="col-3">
        <button type="button" className="btn btn-light w-100" style={{borderRadius: '10px'}}>10000</button>
      </div>
      <div className="col-3">
        <button type="button" className="btn btn-light w-100" style={{borderRadius: '10px'}}>20000</button>
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