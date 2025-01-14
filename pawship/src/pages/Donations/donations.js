import React from 'react';
import './donations.css';

function Donations() {
  return (
    <div className="Donations">
      <h1>Wir freuen uns auf deine Spende!</h1>
      <form>
        <div className="form-group">
          <label htmlFor="vorname">Vorname:</label>
          <input type="text" id="vorname" name="vorname" />
        </div>

        <div className="form-group">
          <label htmlFor="nachname">Nachname:</label>
          <input type="text" id="nachname" name="nachname" />
        </div>

        <div className="form-group">
          <label htmlFor="spende">Spende:</label>
          <select id="spende" name="spende">
            <option value="">Bitte wählen</option>
            <option value="5">5€</option>
            <option value="10">10€</option>
            <option value="20">20€</option>
            <option value="50">50€</option>
            <option value="100">100€</option>
          </select>
          
        </div>

        <input type="submit" value="Spenden" />
      </form>
    </div>
  );
}

export default Donations;
