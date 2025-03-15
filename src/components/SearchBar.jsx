import React, { useState } from "react";
import search_icon from "../assets/search.png";

const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState("");


    const handleSearch = () => {
        if (!query.trim()) return alert("Enter a city name");
        onSearch(query);
        setQuery("");
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") handleSearch();
    };

    return (
        <div className="search-bar">
            <input
                type="text"
                placeholder="Search for a city..."
                value={query}
                onChange={(e) => {
                    setQuery(e.target.value);
                }}
                onKeyDown={handleKeyDown}
            />
            <img src={search_icon} alt="Search" onClick={handleSearch} />


        </div>
    );
};

export default SearchBar;
