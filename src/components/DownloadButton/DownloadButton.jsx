import React, { useState } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { Button, Container } from "react-bootstrap";

const DownloadButton = () => {
  // const [showButton, setShowButton] = useState(true);

  const handleDownloadPDF = () => {
    // Replace 'root' with the ID of the, root element of your app
    const input = document.getElementById("root");
    // setShowButton(false);

    html2canvas(input).then((canvas) => {
      const pdf = new jsPDF();
      const imgData = canvas.toDataURL("image/png");
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save("page.pdf");

      // showButtonAfterDownload();
    });
  };

  // const showButtonAfterDownload = () => {
  //   setShowButton(true);
  // };

  return (
    <div className="mt-5">
      <Container className="d-flex justify-content-end">
        <Button className="download-button" onClick={handleDownloadPDF}>Download as PDF</Button>
      </Container>
      {/* {showButton && (
        <button onClick={handleDownloadPDF}>Download as PDF</button>
      )}
      <style>
        {`
          @media print {
            button {
              display: none;
            }
          }
        `}
      </style> */}
      <hr style={{ border: "5px solid blue" }} />
    </div>
  );
};

export default DownloadButton;
