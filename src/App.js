// App.js

import React, { useState } from 'react';
import './styles.css';

function App() {
  const [currentSection, setCurrentSection] = useState('home');

  const navigateTo = (sectionId) => {
    setCurrentSection(sectionId);
  };

  return (
    <div>
      <header>
        <h1>Welcome to My Portfolio</h1>
        <nav>
          <ul>
            <li>
              <button className="navlinks" onClick={() => navigateTo('home')}>Home</button>
            </li>
            <li>
              <button className="navlinks" onClick={() => navigateTo('about')}>About</button>
            </li>
            <li>
              <button className="navlinks" onClick={() => navigateTo('references')}>References</button>
            </li>
            <li>
              <button className="navlinks" onClick={() => navigateTo('contact')}>Contact</button>
            </li>
          </ul>
        </nav>
      </header>
      <main id="main-content">
        {currentSection === 'home' && (
          <section id="home">
            <h2>Technical Skills</h2>
            <h3>Front End:</h3>
            <ul>
              <li>React.js, 
              Redux, 
              Hooks,
              Context API,
              Jest,
              Cypress,
              Yup,
              Axios,
              JavaScript,
              HTML,
              CSS,
              Ant Design</li>
            </ul>
            <h3>Back End:</h3>
            <ul>
              <li>Node.js,
              Express,
              SQL,
              PostgreSQL,
              Docker,
              Python,
              Git CLI,
              GitHub,
              VS Code,
              Vercel,
              Heroku,
              Netlify</li>
            </ul>
            <h3>Additional:</h3>
            <ul>
              <li>Agile Project Management,
              Algorithms,
              Architecture,
              Debugging,
              Deployment</li>
            </ul>
          </section>
        )}
        {currentSection === 'about' && (
          <section id="about">
            <h2>About Me</h2>
            <p>
              Hello! I'm Robert Dixon, a passionate software developer who embarked on an exciting journey at BloomTech.
              Throughout my time at BloomTech, I've gained valuable knowledge and skills in web development, JavaScript, React, Node.js and more.
              This portfolio is a showcase of my journey and the projects I've worked on.
            </p>
          </section>
        )}
        {currentSection === 'contact' && (
          <section id="contact" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ textAlign: 'center' }}>
              <h2>Contact Me</h2>
              <p>Email: robmsc24@gmail.com</p>
              <p>Phone: (757) - 560 - 5208</p>
              <p>GitHub: <a href="https://github.com/Urbanmisfit90">Robert A Dixon</a></p>
              <p>LinkedIn: <a href="https://www.linkedin.com/in/robertaldixon/">Robert Dixon</a></p>
              <p>Location: Chesapeake, VA 23320</p>
            </div>
          </section>
        )}
      </main>
      <footer>
        <p>Created by Robert Dixon</p>
        <p>&copy; 2024 All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;


