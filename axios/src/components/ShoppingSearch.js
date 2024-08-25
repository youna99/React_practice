// components/ShoppingSearch.js
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchShoppingResults } from "../store/fetchShoppingResults";

const ShoppingSearch = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const { items, status, error } = useSelector((state) => state.shopping);

  const handleSearch = () => {
    if (query.trim()) {
      dispatch(fetchShoppingResults(query));
    }
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for products"
      />
      <button onClick={handleSearch}>Search</button>

      {status === "loading" && <p>Loading...</p>}
      {status === "failed" && <p>Error: {error}</p>}

      {status === "succeeded" && (
        <ul>
          {items.map((item) => (
            <li key={item.link}>
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                {item.title} - {item.lprice}원
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ShoppingSearch;
