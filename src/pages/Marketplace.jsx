import React, { useState } from "react";
import { motion } from "framer-motion";
import MarketItems from "../components/Marketlist/MarketItems";
import { marketPlaceItems } from "../constant/data";
import { GiSettingsKnobs } from "react-icons/gi";

function Marketplace() {
  const [message, setMessage] = useState("");
  const [list, setList] = useState(marketPlaceItems);
  const [ischecked, setChecked] = useState(true);

  const filteredItems = list.filter((items) => {
    if (message === "") return items;
    else
      return (
        items.text.toLowerCase().includes(message) ||
        items.text.toUpperCase().includes(message)
      );
  });

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  const handleChangeCheckbox = () => {
    setChecked(!ischecked);
    console.log(setChecked(!ischecked));
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="mainContainer">
        <div className="container Marketplace-Container p-2">
          <div className="filterContainer  p-2">
            <div className=" my-4">
              <input
                type="text"
                id="message"
                name="message"
                onChange={handleChange}
                value={message}
                className=" form-control w-100 h2"
                placeholder="search"
              />
            </div>
            <div className="filteredCat d-flex align-content-center">
              <GiSettingsKnobs className="icons ms-3" />
              <p className="h3 ms-4">Filter</p>
            </div>
            <div className="border3"></div>
            <div className="checkbox mt-3">
              <p className="h5">By category</p>
              <div className=" form-check">
                <input
                  type="checkbox"
                  className=" form-check-input "
                  name="Cart"
                  id="cart1"
                  checked={ischecked}
                  onChange={handleChangeCheckbox}
                />
                <label htmlFor="cart1 h5">Editorial</label> <br />
                <input
                  type="checkbox"
                  className=" form-check-input "
                  name="Cart"
                  id="cart2"
                  onChange={handleChangeCheckbox}
                />
                <label htmlFor="cart2 h5">Fastion</label> <br />
                <input
                  type="checkbox"
                  className=" form-check-input "
                  name="Cart"
                  id="cart3"
                  onChange={handleChangeCheckbox}
                />
                <label htmlFor="cart3 h5">Art & Museum</label> <br />
                <input
                  type="checkbox"
                  className=" form-check-input "
                  name="Cart"
                  id="cart4"
                  onChange={handleChangeCheckbox}
                />
                <label htmlFor="cart4 h5">Nature</label> <br />
              </div>
            </div>
          </div>
          <div className="MarketplaceContainer p-2">
            <MarketItems nofilteredItems={filteredItems} />
            <div className="seeMore text-center">
              <button className="btn  btn-light text-dark px-5 py-3 border border-dark mt-5">
                see more
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Marketplace;
