import React, { Component } from "react";
import Header from "./components/header/Header";
import ContactList from "./components/contacts/ContactList";
import FormAddContact from "./components/form/FormAddContact";
import { Provider } from "./context";


import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";


class App extends Component {
  render() {
    return (
      <Provider>
        <div className="App">
          <Header brand="Moje KONTAKTY" />
          <main>
            <FormAddContact />
            <ContactList />
          </main>
        </div>
      </Provider>
    );
  }
}

export default App;
