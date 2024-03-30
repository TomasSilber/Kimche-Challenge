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
    console.log("Filters:", filters );

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

    console.log("Filtered Characters:", filteredCharacters );

    // Llamar a la función applyFilters para aplicar los filtros
    applyFilters(filteredCharacters);
  };

  const handleReset = () => {
    setFilters({ status: 'All', species: 'All', gender: 'All' });
    resetCharacters();
  };

  return (
    <div>
      <select name="status" value={filters.status} onChange={handleChange}>
        <option value="All">All Status</option>
        <option value="Alive">Alive</option>
        <option value="Dead">Dead</option>
        <option value="unknown">Unknown</option>
      </select>
      <select name="species" value={filters.species} onChange={handleChange}>
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
        <option value="unknown">unknown</option>
        
      </select>
      <select name="gender" value={filters.gender} onChange={handleChange}>
        <option value="All">All Gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="unknown">Unknown</option>
      </select>
      <button onClick={handleApplyFilters}>Apply Filters</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default Filter;
