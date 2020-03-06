import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

import { Switch, Route, Redirect } from "react-router-dom";

import NavBar from "./components/ui/NavBar";

import Signup from "./components/pages/auth/signup/Signup";
import Profile from "./components/pages/profile/Profile";
import Login from "./components/pages/auth/login/Login";
import Home from "./components/pages/home/Home";
import Details from "./components/pages/profile/CompanyDetails";

import AuthServices from "./services/auth.services";

class App extends Component {
  constructor() {
    super();
    this.state = { loggedInUser: false };
    this.authservices = new AuthServices();
  }

  componentDidUpdate = (prevProps, prevState) =>
    console.log("El estado de App se ha actualizado:", this.state);
  componentDidMount = () => this.fetchUser();

  setTheUser = userObj => this.setState({ loggedInUser: userObj });
  fetchUser = () => {
    this.authservices
      .loggedin()
      .then(theUser => this.setState({ loggedInUser: theUser }))
      .catch(() => this.setState({ loggedInUser: false }));
  };

  render() {
    return (
      <>
        <NavBar
          setTheUser={this.setTheUser}
          loggedInUser={this.state.loggedInUser}
        />

        <Switch>
          <Route
            exact
            path="/"
            render={() => <Home loggedInUser={this.state.loggedInUser} />}
          />
          <Route
            path="/signup"
            render={() => <Signup setTheUser={this.setTheUser} />}
          />
          <Route
            path="/login"
            render={props => <Login setTheUser={this.setTheUser} {...props} />}
          />
          <Route
            path="/profile"
            render={() =>
              this.state.loggedInUser ? (
                <Profile loggedInUser={this.state.loggedInUser} />
              ) : (
                <Redirect to="/" />
              )
            }
          />
          <Route
            path="/details/:symbol"
            render={props =>
              this.state.loggedInUser ? (
                <Details loggedInUser={this.state.loggedInUser} {...props} />
              ) : (
                <Redirect to="/" />
              )
            }
          />
        </Switch>
      </>
    );
  }
}

export default App;
