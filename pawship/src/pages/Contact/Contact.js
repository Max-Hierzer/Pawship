import React from 'react';
import './Contact.css'; 

function Kontakt() {
  return (
    <div className="kontakt">
      <h1>Wir freuen uns auf deine Nachricht!</h1>

      <h2>Öffnungszeiten</h2>
      <p>
        Montag - Freitag: 10:00 - 18:00 Uhr <br />
        Samstag: 10:00 - 14:00 Uhr <br />
        Sonntag: Geschlossen
      </p> 

      <h2>Kontaktinformationen</h2>
      <ul>
        <li>
          <strong>E-Mail:</strong> <a href="mailto:info@tierheim-pawship.de">info@tierheim-pawship.de</a>
        </li> 
        <li>
          <strong>Telefon:</strong> 01234 567890
        </li> 
        <li>
          <strong>Adresse:</strong> 
          <p>
            Tierheim Pawship <br />
            Musterstraße 123 <br />
            12345 Musterstadt
          </p> 
        </li>
        <li>
          <a href="https://www.google.com/maps/place/Tierheim+Pawship,+Musterstraße+123,+12345+Musterstadt" target="_blank" rel="noopener noreferrer">
            Auf Google Maps anzeigen
          </a> 
        </li>
      </ul>
    </div>
  );
}

export default Kontakt;