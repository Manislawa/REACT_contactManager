import React, { Component } from "react";
import Contact from "./Contact";
import { Consumer } from "../context"

export default class ContactList extends Component {


  deleteContact = (id) => {
    const { contacts } = this.state;

    const newContact = contacts.filter(contact => contact.id !== id)

    this.setState({contacts: newContact})
  }

  render() {
    return(
      <Consumer>
      {value => {
        const {contacts} = value;
        return (
          <React.Fragment>
          {contacts.map(contact => (
            <Contact
              key={contact.id}
              personalDetails={contact}
              deleteOnClickHandler={this.deleteContact.bind(this, contact.id)}
            />
          ))}
          <Contact />
        </React.Fragment>
        )
      }}
      </Consumer>
    )


  }
}
