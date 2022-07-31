import React from 'react';

const OrderForm = (props) => {
  return (
    <div>
      <h3>Enter your contact data</h3>
      <form>
        <div className="form-group row align-items-center">
          <label htmlFor="name" className="col-sm-2 col-form-label">Name</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="name"/>
          </div>
        </div>
        <div className="form-group row align-items-center">
          <label htmlFor="email" className="col-sm-2 col-form-label">E-mail</label>
          <div className="col-sm-10">
            <input type="email" className="form-control" id="email"/>
          </div>
        </div>
        <div className="form-group row align-items-center">
          <label htmlFor="phoneNumber" className="col-sm-2 col-form-label">Phone number</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="phoneNumber"/>
          </div>
        </div>
        <button type="submit" className="btn btn-success">Add order</button>
      </form>
      <button type="button" className="btn btn-danger" onClick={props.close}>Close</button>
    </div>
  );
};

export default OrderForm;