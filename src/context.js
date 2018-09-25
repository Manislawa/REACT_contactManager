import React, { Component } from "react";

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        )
      };
    case "ADD_CONTACT":
      return {
        ...state,
        contacts: [action.payload, ...state.contacts]
      };
    default:
      return state;
  }
};

export class Provider extends Component {
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
    ],
    dispatch: action => this.setState(state => reducer(state, action))
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}
export const Consumer = Context.Consumer;
