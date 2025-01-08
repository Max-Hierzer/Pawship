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
      <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false}>
        <div>
          <img src={banner1} alt="Banner 1" />
          <div className="carousel-text">
            <h1>Finde deinen Pawfekten Partner!</h1>
            <p>Unsere Tiere warten darauf, dein Herz zu erobern.</p>
          </div>
        </div>
        <div>
          <img src={banner2} alt="Banner 2" />
          <div className="carousel-text2">
            <h1>Ein Zuhause für kleine Helden!</h1>
            <p>Hilf uns, ihnen ein glückliches Leben zu schenken.</p>
          </div>
        </div>
        <div>
          <img src={banner3} alt="Banner 3" />
          <div className="carousel-text">
            <h1>Pfoten, die dein Herz berühren!</h1>
            <p>Mach den ersten Schritt und entdecke dein Glück.</p>
          </div>
        </div>
      </Carousel>
      <h1>Finde deinen Pawfekten companion!</h1>
    </div>
  );
}

export default Homepage;
