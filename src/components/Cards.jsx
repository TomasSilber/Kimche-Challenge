import React from 'react';
import Card from './card';
import { Link } from 'react-router-dom';

export default function Cards({ characters }) {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {characters?.map(({ id, name, image }) => (
          <Link key={id} to={`/character/${id}`}>
            <Card
              key={id}
              name={name}
              image={image}
            />
          </Link>
        ))}
      </div>
    </section>
  );
}



