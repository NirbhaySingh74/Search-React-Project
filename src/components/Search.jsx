// Search.jsx

import { useState } from "react";
import PropTypes from "prop-types"; // Import PropTypes
import "./Search.css";

const Search = ({ onSearch, onClear }) => {
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    onSearch(query);
    setQuery("");
  };

  const handleClear = () => {
    onClear();
    setQuery("");
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={handleInputChange}
        className="search-input"
      />
      <button onClick={handleSearch} className="search-button">
        Search
      </button>
      <button onClick={handleClear} className="search-button">
        Clear
      </button>
    </div>
  );
};

// Add prop types for onSearch and onClear
Search.propTypes = {
  onSearch: PropTypes.func.isRequired,
  onClear: PropTypes.func.isRequired,
};

export default Search;
