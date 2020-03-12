import React, { Component } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import AuthServices from "../../../../services/auth.services";

class Login extends Component {
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
      .login(this.state)
      .then(theLoggedUser => {
        this.setState({ username: "", password: "" });
        this.props.setTheUser(theLoggedUser);
        this.props.history.push("/");
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
          <h1>Inicio de sesión</h1>
        </Row>
        <Row className="justify-content-md-center">
          <Form onSubmit={this.handleSubmit}>
            <Form.Group>
              <Form.Label>Usuario</Form.Label>
              <Form.Control
                type="text"
                name="username"
                value={this.state.username}
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
              />
            </Form.Group>

            <Button variant="dark" type="submit">
              Iniciar sesión
            </Button>
          </Form>
        </Row>
      </Container>
    );
  }
}

export default Login;
