import React from 'react';
import './animals.css';
import AnimalTemplate from './animalTemplate.js';

function Animals() {
  return (
    <div className="Animals">
      <h1>Unsere Tiere</h1>
      <AnimalTemplate name={'Laika'} age={12} description={'test'} nature={'test'} images={['Laika1.jpg', 'Laika2.jpg', 'Laika3.jpg']}/>
    </div>
  );
}

export default Animals;
