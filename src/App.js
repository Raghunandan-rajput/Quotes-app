import { HindiProvider } from "./Context/HindiContext";
import { QuoteProvide } from "./Context/QuoteContext";
import Hindi from "./Pages/Hindi";
import Navbar from "./components/Navbar";
import Quote from "./components/Quote";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <HindiProvider>
          <QuoteProvide>
            <Navbar />
            <Routes>
              <Route path="/" element={<Quote />} />
              <Route path="hindi" element={<Hindi />} />
            </Routes>
          </QuoteProvide>
        </HindiProvider>
      </Router>
    </>
  );
}

export default App;
