import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Contact extends Component {
  render() {
    const { name, email, phone } = this.props;

    return (
      <div className="contact container">
        <h3 className="contact-name">{name}</h3>
        <ul className="contact-data">
          <li className="contact-data-item">email: {email}</li>
          <li className="contact-data-item">telefon: {phone}</li>
        </ul>
      </div>
    );
  }
}

Contact.defaultProps = {
  name: "użytkownik nieznany",
  email: "nieznany",
  phone: "nieznany"
};
Contact.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired
};
