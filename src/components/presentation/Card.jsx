import React from 'react';

function Card({ children }) {
  return (
    <div className='w-[547px] card-container'>
        <div className='card-internal-container'>
            {children}
        </div>
    </div>
  );
}

export default Card;
