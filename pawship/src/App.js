import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Homepage from './pages/Homepage/Homepage.js';
import Contact from './pages/Contact/Contact.js';
import About from './pages/About/about.js';
import Animals from './pages/Animals/animals.js';
import AnimalTemplate from './pages/Animals/animalTemplate';
import Donations from './pages/Donations/donations.js';
import './styles/App.css';


function App() {
  const animalData = {
    dogs: [
      {
        name: 'Laika',
        images: [
          'Laika1.jpg',
          'Laika2.jpg',
          'Laika3.jpg',
          'Laika4.jpg',
          'Laika5.jpg'
        ]
      },
      {
        name: 'Mia',
        images: [
          'Mia1.jpeg',
          'Mia2.jpeg',
          'Mia3.jpeg',
          'Mia4.jpeg'
        ]
      },
      {
        name: 'JJ',
        images: [
          'JJ1.jpg',
          'JJ2.jpg',
          'JJ3.jpg',
          'JJ4.jpg',
          'JJ5.jpg',
          'JJ6.jpg'
        ]
      },
      {
        name: 'Sammie',
        images: [
          'Sammie1.jpg',
          'Sammie2.jpg',
          'Sammie2.jpg'
        ]
      },
    ],
    cats: [
      {
        name: 'Simba',
        images: [
          'Simba1.jpg',
          'Simba2.jpg'
        ]
      },
      {
        name: 'Nala',
        images: [
          'Nala1.jpg',
          'Nala2.jpg'
        ]
      }
    ]
  };

  return (
    <BrowserRouter>
      <div>
        <Header />
        <main>
          <Routes> 
            <Route path="/" element={<Homepage />} /> 
            <Route path="/contact" element={<Contact />} /> 
            <Route path="/tiere" element={<Animals animalData = {animalData}/>} />
            <Route path="/tiere/Laika" element={<AnimalTemplate name = {'Laika'} age = {5} nature = {'happy'} images = {['Laika1.jpg', 'Laika2.jpg', 'Laika3.jpg', 'Laika4.jpg', 'Laika5.jpg']} />} />
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
