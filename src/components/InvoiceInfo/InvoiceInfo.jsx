import { Col, Container, Form, InputGroup, Row } from "react-bootstrap";

// set state's props received
const InvoiceInfo = ({
  setCustomerName,
  setCustomerAddress,
  setCustomerNumber,
  setInvoiceForm,
  setInvoiceFormAddress,
  setInvoiceFormNumber,
}) => {

  // function's for grab input's value
  const handleName = (e) => {
    setCustomerName(e.target.value);
  };

  const handleAddress = (e) => {
    setCustomerAddress(e.target.value);
  };

  const handleNumber = (e) => {
    setCustomerNumber(e.target.value);
  };

  const handleInvoiceForm = (e) => {
    setInvoiceForm(e.target.value);
  }

  const handleInvoiceAddress = (e) => {
    setInvoiceFormAddress(e.target.value);
  }

  const handleInvoiceNumber = (e) => {
    setInvoiceFormNumber(e.target.value);
  }

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <h4>Invoice To</h4>
            <InputGroup className="mb-3">
              <Form.Control
                onChange={handleName}
                className="border-0"
                placeholder="Enter Customer's Name Here"
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <Form.Control
                onChange={handleAddress}
                className="border-0"
                placeholder="Enter Customer's Address Here"
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <Form.Control
                onChange={handleNumber}
                className="border-0"
                placeholder="Enter Customer's Phone Number Here"
              />
            </InputGroup>
          </Col>
          <Col>
            <h4>Invoice From</h4>
            <InputGroup className="mb-3">
              <Form.Control
                onChange={handleInvoiceForm}
                className="border-0"
                placeholder="Enter Invoice Form"
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <Form.Control
                onChange={handleInvoiceAddress}
                className="border-0"
                placeholder="Enter Invoice Form Address"
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <Form.Control
                onChange={handleInvoiceNumber}
                className="border-0"
                placeholder="Enter Invoice Form Phone Number"
              />
            </InputGroup>
          </Col>
          <hr style={{ border: "5px solid blue" }} />
        </Row>
      </Container>
    </div>
  );
};

export default InvoiceInfo;
