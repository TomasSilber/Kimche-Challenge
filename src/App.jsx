import React from 'react';
import { gql, useQuery } from '@apollo/client';
import './App.css';
import Cards from './components/Cards';

const ALL_CHARACTERS_QUERY = gql`
  query {
    todospersonajes {
      id
      name
      status
      species
      gender
      image
    }
  }
`;

function App() {
  const { data, error, loading } = useQuery(ALL_CHARACTERS_QUERY);

  if (error) return <span style={{ color: 'red' }}>{error.message}</span>; 
  
  return (
    <div className='App'>
      <header className='App-header'>
        {loading
        ? <p>Loading...</p>
        : <Cards characters={data?.todospersonajes} />
        }
      </header>
    </div>
  );
}


export default App;
