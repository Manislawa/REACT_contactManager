import React, { Component } from "react";
import { Consumer } from "../../context";
import FormTextInputGroup from "./FormTextInputGroup";
import uuid from "uuid";

export default class contactFormAdd extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    errors: {}
  };

  handleChange = e =>
    this.setState({
      [e.target.name]: e.target.value
    });
  handleSubmit = (dispatch, e) => {
    e.preventDefault();
    const { name, email, phone } = this.state;

    // form validation - check for errors
    if(name===''){
      this.setState({errors: { name: "Prosze uzupełnić nazwę kontaktu"}});
      return;
    }
    if(email===''){
      this.setState({errors: { email: "Prosze uzupełnić mail kontaktu"}});
      return;
    }
    if(phone===''){
      this.setState({errors: { phone: "Prosze uzupełnić telefon kontaktu"}});
      return;
    }


    const newContact = {
      id: uuid(),
      name,
      email,
      phone
    };
    dispatch({ type: "ADD_CONTACT", payload: newContact });

    // clear form after submit
    this.setState({
      name: "",
      email: "",
      phone: "",
      errors: {}
    });

    this.props.history.push('/');
  };

  render() {
    const { name, email, phone, errors } = this.state;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="contact container">
              <h3 className="contact-name">Dodaj Kontakt</h3>
              <form
                className="contact-data"
                onSubmit={this.handleSubmit.bind(this, dispatch)}
              >
                <FormTextInputGroup
                  label="Nazwa"
                  name="name"
                  placeholder="Wpisz nazwę ..."
                  value={name}
                  onChange={this.handleChange}
                  error={errors.name}
                />
                <FormTextInputGroup
                  label="Email"
                  name="email"
                  type="email"
                  placeholder="Wpisz email ..."
                  value={email}
                  onChange={this.handleChange}
                  error={errors.email}
                />
                <FormTextInputGroup
                  label="Telefon"
                  name="phone"
                  placeholder="Wpisz telefon ..."
                  value={phone}
                  onChange={this.handleChange}
                  error={errors.phone}
                />
                <input
                type="submit"
                value="Dodaj Kontakt" />
              </form>
            </div>
          );
        }}
      </Consumer>
    );
  }
}
