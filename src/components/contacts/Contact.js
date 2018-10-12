import React, { Component } from "react";
import PropTypes from "prop-types";
import { Consumer } from "../../context";

export default class Contact extends Component {
  state = {
    showContactDetails: false
  };
  showDetailsClick = () => {
    this.setState({ showContactDetails: !this.state.showContactDetails });
  };
  deleteContactClick = (id, dispatch) => {
    dispatch({type: 'DELETE_CONTACT', payload: id})
  };

  render() {
    const { id,name, email, phone } = this.props.personalDetails;
    const { showContactDetails } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="contact container">
              <h3 className="contact-name">
                {name}{" "}
                <i onClick={this.showDetailsClick} className="material-icons">
                  keyboard_arrow_down
                </i>
                <i onClick={this.deleteContactClick.bind(this,id,dispatch)} className="material-icons">
                  delete_forever
                </i>
              </h3>
              {showContactDetails ? (
                <ul className="contact-data">
                email:<li className="contact-data-item"> {email}</li>
                telefon: <li className="contact-data-item"> {phone}</li>
                </ul>
              ) : null}
            </div>
          );
        }}
      </Consumer>
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
  personalDetails: PropTypes.object.isRequired
};
