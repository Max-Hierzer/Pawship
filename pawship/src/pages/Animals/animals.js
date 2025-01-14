import React from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './animals.css';

const animalData = {
  dogs: [
    {
      name: 'Laika',
      images: [
        'Laika1.jpg',
        'Laika2.jpg',
        'Laika3.jpg',
        'Laika4.jpg',
        'Laika5.jpg'
      ]
    },
    {
      name: 'Mia',
      images: [
        'Mia1.jpeg',
        'Mia2.jpeg',
        'Mia3.jpeg',
        'Mia4.jpeg'
      ]
    },
    {
      name: 'JJ',
      images: [
        'JJ1.jpg',
        'JJ2.jpg',
        'JJ3.jpg',
        'JJ4.jpg',
        'JJ5.jpg',
        'JJ6.jpg'
      ]
    },
    {
      name: 'Sammie',
      images: [
        'Sammie1.jpg',
        'Sammie2.jpg',
        'Sammie2.jpg'
      ]
    },
  ],
  cats: [
    {
      name: 'Simba',
      images: [
        'Simba1.jpg',
        'Simba2.jpg'
      ]
    },
    {
      name: 'Nala',
      images: [
        'Nala1.jpg',
        'Nala2.jpg'
      ]
    }
  ]
};

function Animals() {
  const basePath = `${process.env.PUBLIC_URL}/images/`;

  return (
    <div className="Animals">
      <div className="Dogs">
        <h1>Unsere Hunde</h1>
        <div className="grid-container">
          {animalData.dogs.map((animal) => (
            <Link to={`/animal/${animal.name.toLowerCase()}`} key={animal.name} className="carousel-link">
              <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false} className="carousel-small">
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
          {animalData.cats.map((animal) => (
            <Link to={`/animal/${animal.name.toLowerCase()}`} key={animal.name} className="carousel-link">
              <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false} className="carousel-small">
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
