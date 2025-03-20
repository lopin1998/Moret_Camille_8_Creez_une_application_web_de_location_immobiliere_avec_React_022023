import React, {useState} from 'react';

const Star = ({data}) => {
    const totalStars = 5; // Nombre total d'étoiles
    return (
      <div className='productStar'>
        {[...Array(totalStars)].map((_, index) => (
          <span className='star' key={index}>
            {index < data ? <img src="/assets/starFull.png" alt="" /> : <img src="/assets/starEmpty.png" alt="" /> } {/* Étoile pleine ou vide */}
          </span>
        ))}
      </div>
    );
  };

  
  export default Star;