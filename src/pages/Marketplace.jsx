import React from "react";
import { motion } from "framer-motion";
import MarketItems from "../components/Marketlist/MarketItems";

function Marketplace() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="mainContainer">
        <div className="container Marketplace-Container p-2">
          <div className="filterContainer  p-2">
            <h1>filter</h1>
          </div>
          <div className="MarketplaceContainer p-2">
            <MarketItems />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Marketplace;
