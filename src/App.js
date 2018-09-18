import React, { Component } from "react";
import Header from "./components/Header";
import ContactList from "./components/ContactList";
import { Provider } from "./context";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider>
        <div className="App">
          <Header text="Moje KONTAKTY" />
          <main>
            <ContactList />
          </main>
        </div>
      </Provider>
    );
  }
}

export default App;
