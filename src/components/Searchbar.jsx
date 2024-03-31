import { useState } from "react";

const Searchbar = ({ onSearch }) => {
    const [input, setInput] = useState("");

    const handleSearch = () => {
        onSearch(input.toLowerCase()); 
    };

    return (
        <div className='max-w-md mx-auto'>
            <div className="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
                <div className="grid place-items-center h-full w-12 text-gray-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </div>

                <input
                    className="peer h-full w-full outline-none text-sm text-gray-700 pr-10 pl-2 bg-white rounded-l-lg" 
                    onChange={(event) => setInput(event.target.value)}
                    type="search"
                    value={input}
                    placeholder="Search character..."
                />
               <button className="h-full px-6 bg-green-500 hover:bg-green-700 text-white font-bold rounded-l-none" onClick={handleSearch}>Search</button>

            </div>
        </div>
    );
};

export default Searchbar;
