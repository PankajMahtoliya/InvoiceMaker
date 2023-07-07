import React from "react";
import { Col, Container, Form, InputGroup, Row } from "react-bootstrap";

const InvoiceInfo = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <h4>Invoice To</h4>
            <InputGroup className="mb-3">
              <Form.Control
                className="border-0"
                placeholder="Enter Customer's Name Here"
                aria-label="Username"
                aria-describedby=""
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <Form.Control
                className="border-0"
                placeholder="Enter Customer's Address Here"
                aria-label="Username"
                aria-describedby=""
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <Form.Control
                className="border-0"
                placeholder="Enter Customer's Phone Number Here"
                aria-label="Username"
                aria-describedby=""
              />
            </InputGroup>
          </Col>
          <Col>
            <h4>Invoice From</h4>
            <InputGroup className="mb-3">
              <Form.Control
                className="border-0"
                placeholder="Enter Invoice Form"
                aria-label="Username"
                aria-describedby=""
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <Form.Control
                className="border-0"
                placeholder="Enter Invoice Form Address"
                aria-label="Username"
                aria-describedby=""
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <Form.Control
                className="border-0"
                placeholder="Enter Invoice Form Phone Number"
                aria-label="Username"
                aria-describedby=""
              />
            </InputGroup>
          </Col>
          <hr style={{border: '5px solid blue'}} />
        </Row>
      </Container>
    </div>
  );
};

export default InvoiceInfo;
