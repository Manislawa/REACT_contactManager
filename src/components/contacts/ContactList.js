import React, { Component } from "react";
import Contact from "./Contact";
import { Consumer } from "../../context"

export default class ContactList extends Component {

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
