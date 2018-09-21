import React, { Component } from "react";

export default class contactAdd extends Component {
  state = {
    name: "",
    email: "",
    phone: ""
  };
  render() {
    return (
      <div className="card mb-3">
        <div className="card-header">Add COntact</div>
        <div className="card-body">
          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" className="form-control form-control-lg" placeholder="Enter Name.."/>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
