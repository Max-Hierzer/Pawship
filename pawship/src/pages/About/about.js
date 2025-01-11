import React from 'react';
import './about.css';

const About = () => {
  const team = [
    { title: 'Leitung', name: 'Johanna Theissing' },
    { title: 'Obmann', name: 'Gernot Fasching' },
    { title: 'Kassier', name: 'Alexander Leitner' },
    { title: 'Tierpfleger/innen', name: 'Nevena Popovic, Tobias Prasser und Philipp Müller' },
  ];

  return (
    <div className="about">
      <h1 className="about-title">Unser Team</h1>
      
      <div className="team-list">
        {team.map(({ title, name }) => (
          <div key={title} className="team-entry">
            <span className="role">{title}</span>
            <span className="name">{name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
