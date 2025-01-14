import React from 'react';
import { Link } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './animals.css';
import AnimalTemplate from './animalTemplate.js';


const animalDataDog = [
  {
    name: 'Laika', images: [
      require('../../images/Laika/IMG_20241101_150555.jpg'),
      require('../../images/Laika/IMG_20220720_151314.jpg')
    ],
  },
  {
    name: 'Mia', images: [
      require('../../images/Mia/7A60B11E-7613-4C01-BB46-A76FE5ABD2EA_1_105_c.jpeg'),
      require('../../images/Mia/7147BC44-8A9E-4B98-8C39-EE97BB89533E_1_105_c.jpeg')
    ],
  }
  // { name: 'JJ', image: require('../../images/JJ/Foto 29.10.23, 10 46 30.jpg') },
  // { name: 'Sammie', image: require('../../images/Sammie/Foto 29.10.23, 10 59 14.jpg') }
];

// const animalDataCat = [
//   { name: 'Simba', image: require('../../images/Simba/Foto 25.08.24, 11 22 43.jpg') },
//   { name: 'Nala', image: require('../../images/Nala/Foto 10.07.24, 20 34 47.jpg') }
// ]



function AnimalSlideshow({ images }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {images.map((image, index) => (
        <div key={index}>
          <img src={image} alt={`slide-${index}`} className="animal-slide-image" />
        </div>
      ))}
    </Slider>
  );
}


function Animals() {
  return (
    <div className="Animals">
      <div className="Dogs">
        <h1>Unsere Hunde</h1>
        <div className="grid-container">
          {animalDataDog.map((animal) => (
            <Link to={`/animal/${animal.name.toLowerCase()}`} key={animal.name}>
              <AnimalSlideshow images={animal.images} />
              <p>{animal.name}</p>
            </Link>
          ))}
        </div>
      </div>
      <div className="Cats">
        <h1>Unsere Katzen</h1>
        <div className="grid-container">
          {/* Similar structure for cats */}
        </div>
      </div>
      <AnimalTemplate name = {"Laika"} age = {12} gender = {"weiblich"} description = {"test"} images = {['IMG_20220720_151314.jpg', 'IMG_20230427_170925.jpg', 'IMG_20230805_132854.jpg', 'IMG_20231107_191339.jpg']} />
    </div>
  );
}


export default Animals;

