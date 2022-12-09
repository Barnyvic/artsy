import React from "react";
import SliderComponet from "../components/navbar/sliderComponet";
import { motion } from "framer-motion";

function HomePage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div>
        <div className="container mainContainer">
          <main className="Home-cotainer">
            <div className="Home-container-header">
              <h1 className="text-center">
                Photography is poetry & beautiful untold stories
              </h1>
              <p className="text-center header-p mt-4">
                Flip through more than 10,000 vintage shots, old photograghs,
                historic images and captures seamlessly in one place. Register
                to get top access.
              </p>
            </div>
          </main>
        </div>
        <SliderComponet />
        <div className="container mainContainer">
          <main className="Home-cotainer">
            <div className="Home-container-body">
              <h2>Featured products</h2>
            </div>
          </main>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default HomePage;
