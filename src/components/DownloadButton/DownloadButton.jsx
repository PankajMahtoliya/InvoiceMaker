import React, { useState } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { Button, Container } from "react-bootstrap";

const DownloadButton = () => {
  const handleDownloadPDF = () => {
    // Replace id with the ID of the, root element of your app
    const input = document.getElementById("main-content");

    html2canvas(input).then((canvas) => {
      const pdf = new jsPDF();
      // to covert canvas data to url
      const imgData = canvas.toDataURL("image/png");
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save("invoice.pdf");
    });
  };

  return (
    <div className="mt-5">
      <Container
        style={{ display: "flex", justifyContent: "end" }}
      >
        <Button onClick={handleDownloadPDF}>
          Download as PDF
        </Button>
      </Container>
    </div>
  );
};

export default DownloadButton;
