// Card.js
import React from 'react';

export default function Card({ name, status, species, gender, image}) {
  return (
    <div className="card">
      <img src={image} alt={name} />
      <div>
        <h2>{name}</h2>
        <p>Status: {status}</p>
        <p>Species: {species}</p>
        <p>Gender: {gender}</p>
      </div>
    </div>
  );
}










// export const AllCharacters = ({todospersonajes})=>{
//     return(
//         <div>
//             <h2>Characters:</h2>
//             {data.todospersonajes.map(pj => (
//                 <div key={pj.id}>
//                   <p>Id: {pj.id}</p>
//                   <p>Name: {pj.name}</p>
//                   <p>Status: {pj.status}</p>
//                   <p>Species: {pj.species}</p>
//                   <p>Gender: {pj.gender}</p>
//                   <img src={pj.image} alt={pj.name} />
//                 </div>
//               ))}
//         </div>
//     )

// }


