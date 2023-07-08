import { Container } from "react-bootstrap";
import DownloadButton from "./components/DownloadButton/DownloadButton";
import InvoiceLogo from "./components/InvoiceLogo/InvoiceLogo";
import InvoiceInfo from "./components/InvoiceInfo/InvoiceInfo";
import CalculationTable from "./components/CalculationTable/CalculationTable";
import { useRef } from "react";

function App() {

  const dataRef = useRef();

  return (
    <div ref={dataRef}>
      <DownloadButton dataRef={dataRef} />
      <Container
        style={{
          paddingTop: "10px",
          paddingRight: "40px",
          paddingLeft: "40px",
          paddingBottom: "40px",
        }}
        id="main-content"
      >
        <InvoiceLogo dataRef={dataRef} />
        <InvoiceInfo dataRef={dataRef} />
        <CalculationTable dataRef={dataRef} />
      </Container>
    </div>
  );
}

export default App;
