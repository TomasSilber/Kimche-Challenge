import React from 'react';
import Card from './card';
import { Link } from 'react-router-dom';

export default function Cards({ characters }) {
  return (
    <div className="cards-container">
      {characters?.map(({id, name, image }) => (
        <Link key={id} to={`/character/${id}`}>
          <Card
            key={id}
            name={name}
            image={image}
          />
        </Link>
      ))}
    </div>
  );
}
