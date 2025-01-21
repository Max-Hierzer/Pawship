import React from 'react';
import './Navigation.css'; 

function Navigation() {
  return (
    <nav>
      <ul>
        <li><a href="/~tobias.prasser/#/">Startseite</a></li>
        <li><a href="/~tobias.prasser/#/tiere">Tiere</a></li>
        <li><a href="/~tobias.prasser/#/spenden">Spenden</a></li>
        <li><a href="/~tobias.prasser/#/about">Über uns</a></li>
        <li><a href="/~tobias.prasser/#/contact">Kontakt</a></li>
      </ul>
    </nav>
  );
}

export default Navigation;
