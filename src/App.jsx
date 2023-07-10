import { Container } from "react-bootstrap";
import DownloadButton from "./components/DownloadButton/DownloadButton";
import InvoiceLogo from "./components/InvoiceLogo/InvoiceLogo";
import InvoiceInfo from "./components/InvoiceInfo/InvoiceInfo";
import CalculationTable from "./components/CalculationTable/CalculationTable";
import { useRef, useState } from "react";

function App() {
  
  // state's declare for invoice input's info and passing to it's component
  const [invoiceNumber, setInvoiceNumber] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [customerAddress, setCustomerAddress] = useState("");
  const [customerNumber, setCustomerNumber] = useState("");
  const [invoiceForm, setInvoiceForm] = useState("");
  const [invoiceFormAddress, setInvoiceFormAddress] = useState("");
  const [invoiceFormNumber, setInvoiceFormNumber] = useState("");
  const dataRef = useRef();

  const isDataFilled =
    invoiceNumber &&
    customerName &&
    customerAddress &&
    customerNumber &&
    invoiceForm &&
    invoiceFormAddress &&
    invoiceFormNumber;

  return (
    <div ref={dataRef}>
      <DownloadButton isDataFilled={isDataFilled} dataRef={dataRef} />
      <Container id="main-content">
        <InvoiceLogo dataRef={dataRef} setInvoiceNumber={setInvoiceNumber} />
        <InvoiceInfo
          dataRef={dataRef}
          setCustomerName={setCustomerName}
          setCustomerAddress={setCustomerAddress}
          setCustomerNumber={setCustomerNumber}
          setInvoiceForm={setInvoiceForm}
          setInvoiceFormAddress={setInvoiceFormAddress}
          setInvoiceFormNumber={setInvoiceFormNumber}
        />
        <CalculationTable dataRef={dataRef} />
      </Container>
    </div>
  );
}

export default App;
