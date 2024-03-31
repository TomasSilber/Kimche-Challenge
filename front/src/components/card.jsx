import React from 'react';

export default function Card({ name, image }) {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-gray-800 text-white">
      <img className="w-full cursor-pointer" src={image} alt={name} />
      <div className="px-6 py-4 flex flex-col justify-between h-20">
        <div>
          <div className="font-bold text-xl mb-2 cursor-pointer">{name}</div>
        </div>
      </div>
    </div>
  );
}
