import React, { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { gql, useQuery } from '@apollo/client';
import './App.css';
import Cards from './components/Cards';
import CharacterDetails from './components/CharacterDetails';
import Searchbar from './components/Searchbar';
import Filter from './components/Filter'; // Importa el componente Filter

const ALL_CHARACTERS_QUERY = gql`
  query {
    todospersonajes {
      id
      name
      status
      species
      gender
      image
      type
      originName
      locationName
    }
  }
`;

function App() {
  const { data, error, loading } = useQuery(ALL_CHARACTERS_QUERY);
  const [filteredCharacters, setFilteredCharacters] = useState(null);
  const location = useLocation().pathname;

  if (error) return <span style={{ color: 'red' }}>{error.message}</span>;

  const handleSearch = (query) => {
    if (query === "") {
      setFilteredCharacters(null);
    } else {
      const filtered = data.todospersonajes.filter(character =>
        character.name.toLowerCase().startsWith(query)
      );
      setFilteredCharacters(filtered);
    }
  };

  const resetCharacters = () => {
    setFilteredCharacters(data.todospersonajes);
  };

  const applyFilters = (filters) => {
    setFilteredCharacters(filters);
  };

  useEffect(()=>{
    if (data?.todospersonajes){
      setFilteredCharacters(data.todospersonajes)
    }
  },[data])

  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Rick and Morty characters</h1>
      </header>

      {location === "/" && <Searchbar onSearch={handleSearch} />} {/* Renderiza la barra de búsqueda solo en la ruta "/" */}
      {loading ? <p>Loading...</p> : (
        <>
          {location === "/" && ( // Renderiza el componente Filter solo en la ruta "/"
            <Filter characters={data.todospersonajes} applyFilters={applyFilters} resetCharacters={resetCharacters} />
          )}

          <Routes>
            <Route exact path="/" element={<Cards characters={filteredCharacters || [] } />} />
            <Route path="/character/:id" element={<CharacterDetails characters={data.todospersonajes} />} />
          </Routes>
        </>
      )}
    </div>
  );
}

export default App;

