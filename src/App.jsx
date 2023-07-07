import { Container } from "react-bootstrap";
import DownloadButton from "./components/DownloadButton/DownloadButton";
import InvoiceLogo from "./components/InvoiceLogo/InvoiceLogo";
import InvoiceInfo from "./components/InvoiceInfo/InvoiceInfo";
import CalculationTable from "./components/CalculationTable/CalculationTable";

function App() {
  return (
    <>
      <DownloadButton />
      <Container
        style={{
          paddingTop: "10px",
          paddingRight: "40px",
          paddingLeft: "40px",
          paddingBottom: "40px",
        }}
        id="main-content"
      >
        <InvoiceLogo />
        <InvoiceInfo />
        <CalculationTable />
      </Container>
    </>
  );
}

export default App;
