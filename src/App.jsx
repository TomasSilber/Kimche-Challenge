import React, { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { gql, useQuery } from '@apollo/client';
import './App.css';
import Cards from './components/Cards';
import CharacterDetails from './components/CharacterDetails';
import Searchbar from './components/Searchbar';
import Filter from './components/Filter'; 
import Paginado from './components/Pagination';

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
  const [currentPage, setCurrentPage] = useState(1);
  const [charactersPerPage] = useState(10);
  const location = useLocation().pathname;

  if (error) return <span style={{ color: 'red' }}>{error.message}</span>;

  useEffect(()=>{
    if (data?.todospersonajes) {
      setFilteredCharacters(data.todospersonajes);
    }
  },[data]);

  useEffect(() => {
    setCurrentPage(1);
  }, [filteredCharacters]);

  const handleSearch = (query) => {
    if (query === "") {
      setFilteredCharacters(data?.todospersonajes);
    } else {
      const filtered = data?.todospersonajes.filter(character =>
        character.name.toLowerCase().startsWith(query)
      );
      setFilteredCharacters(filtered);
    }
  };

  const resetCharacters = () => {
    setFilteredCharacters(data?.todospersonajes);
  };

  const applyFilters = (filters) => {
    setFilteredCharacters(filters);
  };

  const onPageChange = (page) => {
    setCurrentPage(page);
  };

  const indexOfLastCharacter = currentPage * charactersPerPage;
  const indexOfFirstCharacter = indexOfLastCharacter - charactersPerPage;
  const currentCharacters = filteredCharacters ?
    filteredCharacters.slice(indexOfFirstCharacter, indexOfLastCharacter) :
    data?.todospersonajes?.slice(indexOfFirstCharacter, indexOfLastCharacter);

  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Rick and Morty characters</h1>
      </header>

      <Routes>
        <Route exact path="/" element={
          <>
            <Searchbar onSearch={handleSearch} />
            {loading ? <p>Loading...</p> : (
              <Filter characters={data?.todospersonajes} applyFilters={applyFilters} resetCharacters={resetCharacters} />
            )}
            <Cards characters={currentCharacters || []} />
            <Paginado
              totalItems={filteredCharacters ? filteredCharacters.length : data?.todospersonajes?.length}
              itemsPerPage={charactersPerPage}
              currentPage={currentPage}
              onPageChange={onPageChange}
            />
          </>
        } />
        <Route path="/character/:id" element={<CharacterDetails characters={data?.todospersonajes} />} />
      </Routes>
    </div>
  );
}


export default App;

