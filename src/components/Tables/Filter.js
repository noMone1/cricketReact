import React from "react";

function Filters({ filter }) {
  return (
    <div className="card-tools flex ">
      <div className="input-group input-group-sm ">
        <select id="gender" name="gender" className="form-control mr-1">
          <option value="male" selected>
            Male
          </option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        <select id="gender" name="gender" className="form-control ml-2">
          <option value="male" selected>
            Male
          </option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>
    </div>
  );
}

export default Filters;
