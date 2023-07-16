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

  const [invoiceForm, setInvoiceForm] = useState("");

  const dataRef = useRef();

  const isDataFilled = invoiceNumber && customerName && invoiceForm;

  return (
    <div ref={dataRef}>
      <DownloadButton isDataFilled={isDataFilled} dataRef={dataRef} />
      <Container id="main-content">
        <InvoiceLogo dataRef={dataRef} setInvoiceNumber={setInvoiceNumber} />
        <InvoiceInfo
          dataRef={dataRef}
          setCustomerName={setCustomerName}
          setInvoiceForm={setInvoiceForm}
        />
        <CalculationTable dataRef={dataRef} />
      </Container>
    </div>
  );
}

export default App;
