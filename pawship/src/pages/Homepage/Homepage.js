import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import banner1 from "../../images/banner1.jpg";
import banner2 from "../../images/banner2.jpg";
import banner3 from "../../images/banner3.jpg";
import './Homepage.css';

function Homepage() {
  return (
    <div className="homepage">
      <h1>Finde deinen Pawfekten companion!</h1>
      <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false}>
        <div>
          <img src={banner1} alt="Banner 1" />
          <p className="legend">Find Your Perfect Partner!</p>
        </div>
        <div>
          <img src={banner2} alt="Banner 2" />
          <p className="legend">Adopt a Furry Friend!</p>
        </div>
        <div>
          <img src={banner3} alt="Banner 3" />
          <p className="legend">Bring Love Home!</p>
        </div>
      </Carousel>
    </div>
  );
}

export default Homepage;
