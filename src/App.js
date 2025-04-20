import React, { useState } from "react";
import "./styles.css"; // Ensure file name matches
import "./App.css";

function App() {
  const [currentSection, setCurrentSection] = useState("home");

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
              <button
                className="navlinks"
                onClick={() => navigateTo("home")}
                aria-label="Navigate to Home"
              >
                Home
              </button>
            </li>
            <li>
              <button className="navlinks" onClick={() => navigateTo("about")}>
                About
              </button>
            </li>
            <li>
              <button
                className="navlinks"
                onClick={() => navigateTo("references")}
              >
                References
              </button>
            </li>
            <li>
              <button
                className="navlinks"
                onClick={() => navigateTo("contact")}
              >
                Contact
              </button>
            </li>
          </ul>
        </nav>
      </header>
      <main id="main-content">
        {currentSection === "home" && (
          <section id="home">
            <img
              src="13458686_10210431648931492_911658130944951959_o.png"
              alt="Overview of services offered"
              className="image"
            />
            <h2>Technical Skills</h2>
            <h3>Languages</h3>
            <li><img src="JS.png" alt="JS" className="languages-logo" /></li>
            <li><img src="Python.jpeg" alt="Python" className="languages-logo" /></li>
            <li><img src="TS.jpg" alt="TS" className="languages-logo" /></li>
            <h3>Frontend</h3>
            <ul>
              <li><img src="Ant.png" alt="Ant Design" className="frontend-logo" /></li>
              <li><img src="context.jpg" alt="Context API Logo" className="frontend-logo" /></li>
              <li><img src="CSS.jpeg" alt="CSS Logo" className="frontend-logo" /></li>
              <li><img src="Hooks.png" alt="Hooks Logo" className="frontend-logo" /></li>
              <li><img src="HTML.png" alt="HTML Logo" className="frontend-logo" /></li>
              <li><img src="ReactJS.jpg" alt="ReactJS Logo" className="frontend-logo" /></li>
              <li><img src="Redux.png" alt="Redux Logo" className="frontend-logo" /></li>
            </ul>
            <h3>Back End</h3>
            <ul>
              <li><img src="Express.png" alt="Express" className="backend-logo" /></li>
              <li><img src="NodeJS.png" alt="Express" className="backend-logo" /></li>
            </ul>
            <h3>Additional:</h3>
            <ul>
              <li>
                Agile Project Management, Algorithms, Architecture, Debugging,
                Deployment
              </li>
            </ul>
            <h2 className="projects-heading">Projects</h2>
            <div className="projects-container"></div>
          </section>
        )}
        {currentSection === "about" && (
          <section id="about">
            <h2>About Me</h2>
            <img
              src="53595298_10219476102837187_8932955788637372416_n (1).jpg"
              alt="Overview of services offered"
              className="image"
            />
            <p>
              Hello! I'm Robert Dixon, a passionate software developer who
              embarked on an exciting journey at BloomTech. Throughout my time
              at BloomTech, I've gained valuable knowledge and skills in web
              development, JavaScript, React, Node.js and more. This portfolio
              is a showcase of my journey and the projects I've worked on.
            </p>
          </section>
        )}
        {currentSection === "contact" && (
          <section
            id="contact"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div style={{ textAlign: "center" }}>
              <h2>Contact Me</h2>
              <p>Email: robmsc24@gmail.com</p>
              <p>Phone: (757) - 560 - 5208</p>
              <p>
                GitHub:{" "}
                <a href="https://github.com/Urbanmisfit90">Robert A Dixon</a>
              </p>
              <p>
                LinkedIn:{" "}
                <a href="https://www.linkedin.com/in/robertaldixon/">
                  Robert Dixon
                </a>
              </p>
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
