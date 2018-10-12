import React, { Component } from "react";

import { Consumer } from "../../context";
import Contact from "./Contact";

export default class ContactList extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { contacts } = value;
          return (
            <React.Fragment>
              <h1>Lista kontaktow</h1>
              {contacts.map(contact => (
                <Contact key={contact.id} personalDetails={contact} />
              ))}
              <Contact />
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}
