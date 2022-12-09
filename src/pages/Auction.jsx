import React from "react";
import { motion } from "framer-motion";

function Auction() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="container mainContainer">
        <h1>Auction</h1>
      </div>
    </motion.div>
  );
}

export default Auction;
