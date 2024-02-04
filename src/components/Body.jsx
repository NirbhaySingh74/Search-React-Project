// Body.jsx

import { useEffect, useState } from "react";
import Search from "./Search";
import "./Body.css";
import ShimmerUi from "./ShimmerUi";

function Body() {
  const [data, setData] = useState(null);
  const [filteredData, setFilteredData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false); // New state for not found message

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://randomuser.me/api?results=50");
        const result = await response.json();
        setData(result);
        setFilteredData(result);
      } catch (error) {
        console.error("Error fetching data: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleSearch = (query) => {
    if (!query) {
      setFilteredData(data);
      setNotFound(false); // Clear not found message when query is empty
    } else {
      const filteredResults = data.results.filter((user) =>
        `${user.name.first} ${user.name.last}`
          .toLowerCase()
          .includes(query.toLowerCase())
      );
      setFilteredData({ results: filteredResults });

      // Set not found message based on the search results
      setNotFound(filteredResults.length === 0);
    }
  };

  const handleClear = () => {
    setFilteredData(data);
    setNotFound(false); // Clear not found message when clearing the search
  };

  return (
    <div>
      <Search onSearch={handleSearch} onClear={handleClear} />

      {loading ? (
        <ShimmerUi />
      ) : (
        <div className="user-list">
          {notFound ? (
            <h4 style={{ color: "red" }}>No items found.</h4>
          ) : (
            <div className="user-list">
              {filteredData.results.map((user, index) => (
                <div key={index} className="user-item">
                  <img
                    src={user.picture.thumbnail}
                    alt="User Thumbnail"
                    className="user-image"
                  />
                  <div className="user-details">
                    <p>Hi, my name is</p>
                    <p className="user-name">{` ${user.name.first} ${user.name.last}`}</p>
                    <p className="user-email">{user.email}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Body;
