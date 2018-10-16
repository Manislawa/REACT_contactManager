import React, { Component } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/header/Header";
import About from "./components/pages/About";
import NotFound from "./components/pages/NotFound";
import ContactList from "./components/contacts/ContactList";
import FormAddContact from "./components/form/FormAddContact";
import FormEditContact from "./components/form/FormEditContact";
import { Provider } from "./context";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <div className="App">
            <Header brand="Moje KONTAKTY" />
            <main>
              <Switch>
                <Route exact path="/" component={ContactList} />
                <Route exact path="/about" component={About} />
                <Route exact path="/contact/add" component={FormAddContact} />
                <Route exact path="/contact/edit/:id" component={FormEditContact} />
                <Route component={NotFound} />
              </Switch>
            </main>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
