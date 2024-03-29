import React, { Component } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import AuthServices from "../../../../services/auth.services";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.authservices = new AuthServices();
  }

  handleChange = e => {
    let { name, value } = e.target;
    this.setState({ [name]: value });
  };

  postUser = () => {
    this.authservices
      .signup(this.state)
      .then(theLoggedNewUser => {
        this.setState({ username: "", password: "" });
        this.props.setTheUser(theLoggedNewUser);
      })
      .catch(err => console.log({ err }));
  };

  handleSubmit = e => {
    e.preventDefault();
    this.postUser();
  };

  render() {
    return (
      <Container className="register">
        <Row className="justify-content-md-center">
          <h1>Registro de usuarios</h1>
        </Row>
        <Row className="justify-content-md-center">
          <Form onSubmit={this.handleSubmit}>
            <Form.Group className="centered">
              <Form.Label>Usuario</Form.Label>
              <Form.Control
                type="text"
                name="username"
                value={this.state.username}
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group className="centered">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
              />
            </Form.Group>

            <Button variant="dark" type="submit">
              Registrarse
            </Button>
          </Form>
        </Row>
      </Container>
    );
  }
}

export default Signup;
