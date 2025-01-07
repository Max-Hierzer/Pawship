import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Homepage from './pages/Homepage/Homepage.js';
import Contact from './pages/Contact/Contact.js';
import './styles/App.css';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <main>
          <Routes> 
            <Route path="/" element={<Homepage />} /> 
            <Route path="/contact" element={<Contact />} /> 
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;