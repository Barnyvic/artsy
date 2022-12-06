import HomePage from "./pages/HomePage";
import Marketplace from "./pages/Marketplace";
import Auction from "./pages/Auction";
import Drop from "./pages/Drop";
import { Route, Routes } from "react-router-dom";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/auction" element={<Auction />} />
        <Route path="/drop" element={<Drop />} />
      </Routes>
    </div>
  );
}

export default App;
