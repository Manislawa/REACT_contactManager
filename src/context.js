import React, { Component } from "react";

const Context = React.createContext();

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
    ]
  };

  render() {
    return <Context.Provider value={this.state}>{this.props.children}</Context.Provider>;
  }
}
export const Consumer = Context.Consumer;

