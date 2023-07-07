import React, { useRef, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import "./InvoiceLogo.css";
import InvoiceNoAndDate from "../InvoiceNoAndDate/InvoiceNoAndDate";

const InvoiceLogo = () => {
  const [logo, setLogo] = useState(null);
  const [showButton, setShowButton] = useState(true);

  const fileInputRef = useRef(null);

  const handleLogoChange = (e) => {
    const file = e.target.files[0];
    setLogo(URL.createObjectURL(file));
    setShowButton(false);
  };

  const handleDeleteClick = () => {
    setLogo(null);
    setShowButton(true);
  };

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div>
      <Row>
        <Col>
          <InvoiceNoAndDate />
        </Col>
        <Col>
          <div className="d-flex justify-content-end">
            <div>
              <input
                type="file"
                accept="image/*"
                onChange={handleLogoChange}
                ref={fileInputRef}
                style={{ display: "none" }}
              />
              {showButton && (
                <Button onClick={handleUploadClick}>Upload Logo</Button>
              )}
              {logo && (
                <div className="logo-container">
                  <img src={logo} className="logo" alt="Logo" />
                  <Button onClick={handleDeleteClick}>Delete</Button>
                </div>
              )}
            </div>
          </div>
        </Col>
        <hr style={{ border: "5px solid blue" }} />
      </Row>
    </div>
  );
};

export default InvoiceLogo;
