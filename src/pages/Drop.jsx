import React from "react";
import { motion } from "framer-motion";

function Drop() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="container mainContainer">
        <h1>Drops</h1>
      </div>
    </motion.div>
  );
}

export default Drop;
