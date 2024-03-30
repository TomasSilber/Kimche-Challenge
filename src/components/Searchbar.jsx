import { useState } from "react";

const Searchbar = ({ onSearch }) => {
    const [input, setInput] = useState("");

    const handleSearch = () => {
        onSearch(input.toLowerCase()); 
    };

    return (
        <div>
            <input
                onChange={(event) => setInput(event.target.value)}
                type="search"
                value={input}
                placeholder="Search Character"
            />
            <button onClick={handleSearch}>Search</button>
        </div>
    );
};

export default Searchbar;
