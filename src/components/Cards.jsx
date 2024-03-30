import React from 'react';
import Card from './card';

export default function Cards({ characters }) {
  return (
    <div className="cards-container">
      {characters.map(({id, name, status, species, gender, image }) => (
        <Card
          key={id}
          //id={id}
          name={name}
          status={status}
          species={species}
          gender={gender}
          image={image}
        />
      ))}
    </div>
  );
}
