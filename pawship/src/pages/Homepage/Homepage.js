import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useNavigate } from 'react-router-dom';
import './Homepage.css';


function Homepage() {

  const navigate = useNavigate();

  const handleAdoptNowClick = () => {
    navigate('/tiere');
  };

  const banner1 = process.env.PUBLIC_URL + '/images/' + 'banner1.jpg';
  const banner2 = process.env.PUBLIC_URL + '/images/' + 'banner2.jpg';
  const banner3 = process.env.PUBLIC_URL + '/images/' + 'banner3.jpg';

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
      <div className="main">
        <br />
        <h1>Pawship</h1>
        <p>Wir vermitteln nicht nur Tiere – wir schaffen Verbindungen fürs Leben. Unsere Mission ist es, liebevollen Tieren eine zweite Chance zu geben und Familien mit ihrem perfekten tierischen Begleiter zusammenzubringen.</p>
        <br />
        <h1>Warum Pawship?</h1>
        <ul>
          <li>Für die Tiere: Jedes Tier verdient ein Zuhause, in dem es geliebt und geschätzt wird.</li>
          <li>Für dich: Tiere bereichern unser Leben und schenken bedingungslose Liebe.</li>
          <li>Mach den Unterschied: Gib einem Tier eine zweite Chance.</li>
        </ul>
        <br />
        <br />
        <h1>Mach den Unterschied!</h1>
        <p>Durch Adoption gibst du einem Tier nicht nur ein Zuhause, sondern auch die Chance auf ein glückliches Leben. Schau dir unsere Tiere an und finde deinen neuen besten Freund!</p>
        <button onClick={handleAdoptNowClick} className="adopt-button">
          Adopt Now
        </button>
        <br />
        <br />
        <h1>So funktioniert’s:</h1>
        <ol className="styled-list">
          <li>
            <strong>Stöbern:</strong> Sieh dir die verfügbaren Tiere auf unserer Seite an.
          </li>
          <li>
            <strong>Verlieben:</strong> Finde das Tier, das perfekt zu dir passt.
          </li>
          <li>
            <strong>Adoptieren:</strong> Wir helfen dir bei jedem Schritt, um sicherzustellen, dass dein neuer Begleiter sich bei dir wohlfühlt.
          </li>
        </ol>
        <br />
        <br />
        <h1>Werde Teil von Pawship!</h1>
        <p>Gemeinsam machen wir die Welt ein wenig besser – ein Tier nach dem anderen.</p>
        <br />
        <br />
      </div>
    </div>
  );
}

export default Homepage;
