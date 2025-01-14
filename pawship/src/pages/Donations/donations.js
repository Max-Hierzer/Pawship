import React from 'react';
import './donations.css';

function Donations() {
  return (
    <div className="Donations">
      <h1>Wir freuen uns auf deine Spende!</h1>

      <form>
        <div className="donation-box">
          <div className="options">
            <label>
              <input type="radio" name="option" value="einmalig" />
              einmalig
            </label>
            <label>
              <input type="radio" name="option" value="monatlich" />
              monatlich
            </label>
          </div>

          <div className="prices">
            <label className="custom-radio">
              <input type="radio" name="amount" value="5" id="amount-5" />
              <span className="radio-box">5€</span>
            </label>
            <label className="custom-radio">
              <input type="radio" name="amount" value="10" id="amount-10" />
              <span className="radio-box">10€</span>
            </label>
            <label className="custom-radio">
              <input type="radio" name="amount" value="20" id="amount-20" />
              <span className="radio-box">20€</span>
            </label>
            <label className="custom-radio">
              <input type="radio" name="amount" value="50" id="amount-50" />
              <span className="radio-box">50€</span>
            </label>
          </div>

          <div className="oder">oder</div>

          <div className="self-price">
            <input
              type="number"
              id="custom-spende"
              name="custom-spende"
              min="1"
              placeholder="Eigener Betrag"
            />
          </div>
        </div>

        <div className='data'>
          <h1>Meine Daten</h1>
          <div className='info'>
            <select name="gender" id="gender">
              <option value="" disabled selected>Anrede</option>
              <option value="frau">Frau</option>
              <option value="herr">Herr</option>
              <option value="firma">Firma</option>
            </select>
            <input type='text' placeholder='Vorname' />
            <input type='text' placeholder='Nachname' />
            <input type='text' placeholder='Anschrift' />
            <input type='text' placeholder='PLZ' />
            <input type='text' placeholder='Ort' />
            <input type='text' placeholder='Land' />
            <input type='text' placeholder='Telefon' />
            <input type='text' placeholder='Email' />
          </div>
        </div>

        <input type="submit" value="Spenden" />
      </form>
    </div>
  );
}

export default Donations;
