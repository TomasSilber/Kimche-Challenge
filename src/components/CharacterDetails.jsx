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
    <div className="relative">
      <button className="absolute top-0 right-0 bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-1 px-2 rounded-md" onClick={handleClose}>X</button>
      <div className="bg-green-500 rounded-md shadow-md p-4 max-w-xs mx-auto">
        <h2 className="text-lg font-semibold mb-2 text-black text-center">{character.name}</h2>
        <div className="grid grid-cols-2 gap-2 text-sm text-white">
          <div>
            <p className="font-semibold text-black">Status:</p>
            <p>{character.status}</p>
          </div>
          <div>
            <p className="font-semibold text-black">Gender:</p>
            <p>{character.gender}</p>
          </div>
          <div>
            <p className="font-semibold text-black">Species:</p>
            <p>{character.species}</p>
          </div>
          <div>
            <p className="font-semibold text-black">Type:</p>
            <p>{character.type ? character.type : "unknown"}</p>
          </div>
          <div>
            <p className="font-semibold text-black">Location:</p>
            <p>{character.locationName}</p>
          </div>
          <div>
            <p className="font-semibold text-black">Origin:</p>
            <p>{character.originName}</p>
          </div>
          <div className="col-span-2 flex justify-center">
            <img className="max-w-full rounded-md" src={character.image} alt={character.name} />
          </div>
        </div>
      </div>
    </div>
  );
  
  
  
  
  
  
  
  
  
}