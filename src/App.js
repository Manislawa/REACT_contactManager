import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import ContactList from "./components/ContactList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header text="Moje KONTAKTY" />
        <main>
          <ContactList />
        </main>
      </div>
    );
  }
}

export default App;
