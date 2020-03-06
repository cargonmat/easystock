import React from "react";

import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

//import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Col md={4}>
      <Card className="card-rusa">
        <Card.Body>
          <Card.Title>hello</Card.Title>
          <hr></hr>
          <Button as="div" variant="dark" size="sm"></Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Home;
