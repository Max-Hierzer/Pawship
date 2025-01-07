import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Homepage from './pages/Homepage/Homepage';
import Contact from './pages/Contact/Contact';
import About from './pages/About/About';
import Animals from './pages/Animals/Animals';
import Donations from './pages/Donations/Donations';
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
            <Route path="/tiere" element={<Animals />} /> 
            <Route path="/spenden" element={<Donations />} /> 
            <Route path="/about" element={<About />} /> 
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;