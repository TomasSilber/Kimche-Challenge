import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';

export default function CharacterDetails({ characters }) {
  const { id } = useParams();
  const character = characters.find(character => character.id === id);

  if (!character) {
    return <p>Character not found.</p>;
  }
  
  const navigate = useNavigate(); 

  const onClose = () => {
    navigate(-1);
  };

  const handleClose = () => {
    onClose(character.id);
  };

  return (
    <div>
      <h2>Character Details</h2>
      <button onClick={handleClose}>X</button> 
      <p>Name: {character.name}</p>
      <p>Status: {character.status}</p>
      <p>Gender: {character.gender}</p>
      <p>Species: {character.species}</p>
      <p>Type: {character.type ? character.type : "unknown"}</p>
      <p>Location: {character.locationName}</p>
      <p>Origin: {character.originName}</p>
      <img src={character.image} alt={character.name} />
    </div>
  );
}

