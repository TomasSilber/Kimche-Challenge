import React from 'react';

export default function Card({ name, status, species, gender, image}) {
  return (
    <div className="card">
      <img src={image} alt={name} />
      <div>
        <h2>{name}</h2>
      </div>
    </div>
  );
}
