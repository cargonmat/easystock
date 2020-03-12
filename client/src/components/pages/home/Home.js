import React from "react";

import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

//import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Container className="Home">
      <Row className="justify-content-md-center">
        <h1> Bienvenido a Easystock</h1>
      </Row>
      <Row>
        <p className="grande">
          Easystock es una App centrada en explicar el funcionamiento del
          mercado de acciones a través de la gamificación del sistema.
        </p>
      </Row>
      <hr></hr>
      <Row>
        <Col md={4}>
          <Card className="card-rusa">
            <Card.Body>
              <Card.Title>Precios de acciones en tiempo real</Card.Title>
              <p>
                Observa las subidas y bajadas de los precios de todas las
                empresas con presencia en la Bolsa ya sean nacionales o
                internacionales.
              </p>
              <hr></hr>
              <Button as="div" variant="dark" size="sm"></Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="card-rusa">
            <Card.Body>
              <Card.Title>Realiza transacciones</Card.Title>
              <p>
                Al crear una cuenta de Easystock se te pondran a disposicion
                100.000 USD, simulados por supuesto con los que podrás comprar y
                vender acciones.
              </p>
              <hr></hr>
              <Button as="div" variant="dark" size="sm"></Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="card-rusa">
            <Card.Body>
              <Card.Title> Observa los resultados</Card.Title>
              <p>
                A través de estadísticas comparativas podrás ver el resultado de
                tus operaciones y prepararte para el mundo real.
              </p>
              <hr></hr>
              <Button as="div" variant="dark" size="sm"></Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
