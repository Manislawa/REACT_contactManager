import React, { Component } from "react";
import Contact from "./Contact";

export default class ContactList extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: "Mania Witoszek",
        email: "manislawa@o2.pl",
        phone: "69519446"
      },
      {
        id: 2,
        name: "Marek Witoszek",
        email: "marek@o2.pl",
        phone: "494969446"
      },
      {
        id: 3,
        name: "Grzes Witoszek",
        email: "grzes@o2.pl",
        phone: "554699446"
      }
    ]
  };
  render() {
    const { contacts } = this.state;

    return (
      <div className="contactList">
        {contacts.map(contact => (
          <Contact
            key={contact.id}
            name={contact.name}
            email={contact.email}
            phone={contact.phone}
          />
        ))}
        <Contact />
      </div>
    );
  }
}
