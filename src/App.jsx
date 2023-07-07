import { Container } from "react-bootstrap";
import DownloadButton from "./components/DownloadButton/DownloadButton";
import InvoiceLogo from "./components/InvoiceLogo/InvoiceLogo";
import InvoiceInfo from "./components/InvoiceInfo/InvoiceInfo";
import CalculationTable from "./components/CalculationTable/CalculationTable";

function App() {
  return (
    <>
      <Container>
        <DownloadButton />
        <InvoiceLogo />
        <InvoiceInfo />
        <CalculationTable />
      </Container>
    </>
  );
}

export default App;
