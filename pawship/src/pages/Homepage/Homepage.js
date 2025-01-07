import React from 'react';
import './Homepage.css';

function Homepage() {
  return (
    <div className="homepage">
      <section className="hero">
        <div className="hero-content">
          <h1>Finde deinen Pawfekten Pawtner!</h1>
          <p>
            Pawship vermittelt liebevolle Tiere in ein neues Zuhause. Entdecke
            unsere Auswahl an Hunden, Katzen und anderen Tieren, die darauf
            warten, deine Familie zu bereichern.
          </p>
          <a href="/tiere" className="button">
            Unsere Tiere kennenlernen
          </a>
        </div>
        {/* Hier kommt das Bilderkarussell hin */}
        <div className="image-carousel">
          {/* Beispiel für ein einfaches Karussell mit 3 Bildern */}
          <img src="/images/bild1.jpg" alt="Glückliches Tier 1" />
          <img src="/images/bild2.jpg" alt="Glückliches Tier 2" />
          <img src="/images/bild3.jpg" alt="Glückliches Tier 3" />
        </div>
      </section>

      {/* Weitere Abschnitte der Homepage können hier hinzugefügt werden */}
    </div>
  );
}

export default Homepage;