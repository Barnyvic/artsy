import React from "react";
import { motion } from "framer-motion";
import classes from "./marketlist.module.scss";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

function MarketItems({ nofilteredItems }) {
  return (
    <div className={classes.Market_list_Container}>
      {nofilteredItems.map((items) => (
        <motion.div
          whileHover={{ scale: 1.2 }}
          transition={{ duration: 2, type: "spring", stiffness: 60 }}
          whileTap={{ scale: 2 }}
          key={items.id}
          data-aos="zoom-in-up"
          data-aos-duration="3000"
        >
          <img src={items.imgUrl} alt="" className="img-fluid" />
          <p className="h4 mt-3">{items.text}</p>
          <span className="">{items.amount}</span>
        </motion.div>
      ))}
    </div>
  );
}

export default MarketItems;
