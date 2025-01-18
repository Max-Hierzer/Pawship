import React from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './animals.css';


function Animals(animalData) {
  const basePath = `${process.env.PUBLIC_URL}/images/`;
  console.log(animalData)
  return (
    <div className="Animals">
      <div className="Dogs">
        <h1>Unsere Hunde</h1>
        <div className="grid-container">
          {animalData.animalData.dogs.map((animal) => (
            <Link to={`/tiere/${animal.name.toLowerCase()}`} key={animal.name} className="carousel-link">
              <Carousel infiniteLoop showThumbs={false} showStatus={false} className="carousel-small">
                {animal.images.map((image, index) => (
                  <div key={index}>
                    <img
                      src={`${basePath}${animal.name}/${image}`}
                      alt={`${animal.name}-${index}`}
                      className="animal-thumbnail"
                    />
                  </div>
                ))}
              </Carousel>
              <p>{animal.name}</p>
            </Link>
          ))}
        </div>
      </div>
      <div className="Cats">
        <h1>Unsere Katzen</h1>
        <div className="grid-container">
          {animalData.animalData.cats.map((animal) => (
            <Link to={`/tiere/${animal.name.toLowerCase()}`} key={animal.name} className="carousel-link">
              <Carousel infiniteLoop showThumbs={false} showStatus={false} className="carousel-small">
                {animal.images.map((image, index) => (
                  <div key={index}>
                    <img
                      src={`${basePath}${animal.name}/${image}`}
                      alt={`${animal.name}-${index}`}
                      className="animal-thumbnail"
                    />
                  </div>
                ))}
              </Carousel>
              <p>{animal.name}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Animals;
