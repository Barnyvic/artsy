import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { marketPlaceItems } from "../../constant/data";

function SearchComp({ onfilteredItems }) {
  const [message, setMessage] = useState("");

  const [list, setList] = useState(marketPlaceItems);

  const filteredItems = list.filter((items) => {
    if (message === "") return items;
    else return items.text.toLowerCase().includes(message);
  });

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  return (
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
      <h2>{message}</h2>
    </div>
  );
}

export default SearchComp;
