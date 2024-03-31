import React, { useState } from 'react';

const Filter = ({ characters, applyFilters, resetCharacters }) => {
  const [filters, setFilters] = useState({
    status: 'All',
    species: 'All',
    gender: 'All'
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFilters(prevFilters => ({
      ...prevFilters,
      [name]: value
    }));
  };

  const handleApplyFilters = () => {
    let filteredCharacters = [...characters];

    if (filters.status !== 'All') {
      filteredCharacters = filteredCharacters.filter(character => character.status === filters.status);
    }
    if (filters.species !== 'All') {
      filteredCharacters = filteredCharacters.filter(character => character.species === filters.species);
    }
    if (filters.gender !== 'All') {
      filteredCharacters = filteredCharacters.filter(character => character.gender === filters.gender);
    }

    applyFilters(filteredCharacters);
  };

  const handleReset = () => {
    setFilters({ status: 'All', species: 'All', gender: 'All' });
    resetCharacters();
  };

  return (
    <div className="inline-flex self-center">
      <select className="text-base font-bold rounded border-2 border-green-500 text-gray-600 h-10 w-40 pl-2 pr-6 bg-white hover:border-gray-400 focus:outline-none appearance-none" 
              name="status" 
              value={filters.status} 
              onChange={handleChange}>
        <option value="All">All Status</option>
        <option value="Alive">Alive</option>
        <option value="Dead">Dead</option>
        <option value="unknown">Unknown</option>
      </select>
      <select className="text-base font-bold rounded border-2 border-green-500 text-gray-600 h-10 w-40 pl-2 pr-6 ml-2 bg-white hover:border-gray-400 focus:outline-none appearance-none" 
              name="species" 
              value={filters.species} 
              onChange={handleChange}>
        <option value="All">All Species</option>
        <option value="Human">Human</option>
        <option value="Alien">Alien</option>
        <option value="Humanoid">Humanoid</option>
        <option value="Poopybutthole">Poopybutthole</option>
        <option value="Mythological Creature">Mythological Creature</option>
        <option value="Animal">Animal</option>
        <option value="Robot">Robot</option>
        <option value="Cronenberg">Cronenberg</option>
        <option value="Disease">Disease</option>
        <option value="unknown">Unknown</option>
      </select>
      <select className="text-base font-bold rounded border-2 border-green-500 text-gray-600 h-10 w-40 pl-2 pr-6 ml-2 bg-white hover:border-gray-400 focus:outline-none appearance-none" 
              name="gender" 
              value={filters.gender} 
              onChange={handleChange}>
        <option value="All">All Gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="unknown">Unknown</option>
      </select>
      <button className="ml-2 h-10 px-4 bg-green-500 hover:bg-green-700 text-white font-bold text-sm" onClick={handleApplyFilters}>Apply Filters</button>
      <button className="ml-2 h-10 px-4 bg-black border-2 border-board-500 hover:bg-board-700 text-white font-bold text-sm" onClick={handleReset}>Reset</button>


    </div>
  );
};

export default Filter;
