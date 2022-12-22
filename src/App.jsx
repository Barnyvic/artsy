import HomePage from "./pages/HomePage";
import Marketplace from "./pages/Marketplace";
import Auction from "./pages/Auction";
import Drop from "./pages/Drop";
import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import { AnimatePresence } from "framer-motion";
import "rsuite/dist/rsuite.min.css";
import Footer from "./components/footer/Footer";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <Navbar />
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/auction" element={<Auction />} />
          <Route path="/drop" element={<Drop />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </div>
  );
}

export default App;
