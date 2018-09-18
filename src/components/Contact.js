import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Contact extends Component {
  state = {
    showContactDetails: true
  };
  showDetailsClick = () => {
    this.setState({ showContactDetails: !this.state.showContactDetails });
  };
  deleteContactClick = () => {
    this.props.deleteOnClickHandler();
  };

  render() {
    const { name, email, phone } = this.props.personalDetails;
    const { showContactDetails } = this.state;

    return (
      <div className="contact container">
        <h3 className="contact-name">
          {name}{" "}
          <i onClick={this.showDetailsClick} className="material-icons">
            keyboard_arrow_down
          </i>
          <i onClick={this.deleteContactClick} className="material-icons">
          delete_forever
        </i>
        </h3>
        {showContactDetails ? (
          <ul className="contact-data">
            <li className="contact-data-item">email: {email}</li>
            <li className="contact-data-item">telefon: {phone}</li>
          </ul>
        ) : null}
      </div>
    );
  }
}

Contact.defaultProps = {
  personalDetails: {
    name: "użytkownik nieznany",
    email: "nieznany",
    phone: "nieznany"
  }
};
Contact.propTypes = {
  personalDetails: PropTypes.object.isRequired,
  deleteOnClickHandler: PropTypes.func.isRequired
};
