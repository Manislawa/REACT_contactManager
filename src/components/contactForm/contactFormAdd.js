import React, { Component } from "react";
import { Consumer } from "../../context";
import uuid from "uuid";

export default class contactFormAdd extends Component {
  state = {
    name: "",
    email: "",
    phone: ""
  };

  handleChange = e =>
    this.setState({
      [e.target.name]: e.target.value
    });
  handleSubmit = (dispatch,e) => {
    e.preventDefault();
    const { name,email,phone } = this.state;
    const newContact = {
      id: uuid(),
      name,
      email,
      phone
    }
    dispatch({type: "ADD_CONTACT", payload: newContact})

    // clear form after submit
    this.setState({
      name: '',
      email: '',
      phone: ''
    })
  };

  render() {
    const { name, email, phone } = this.state;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="contact container">
              <h3 className="contact-name">Dodaj Kontakt</h3>
              <form className="contact-data" onSubmit={this.handleSubmit.bind(this,dispatch)}>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    name="name"
                    className="contact-data-item"
                    placeholder="Enter Name.."
                    value={name}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="contact-data-item"
                    placeholder="Enter Email.."
                    value={email}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone</label>
                  <input
                    type="text"
                    name="phone"
                    className="contact-data-item"
                    placeholder="Enter Phone.."
                    value={phone}
                    onChange={this.handleChange}
                  />
                </div>
                <input type="submit" value="Add" />
              </form>
            </div>
          );
        }}
      </Consumer>
    );
  }
}
