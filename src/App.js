import React, { useState } from "react";
import "./styles.css";
import "./App.css";
import { Box } from "@mui/material";

function App() {
  const [currentSection, setCurrentSection] = useState("home");

  const navigateTo = (sectionId) => {
    setCurrentSection(sectionId);
  };

  const LogoContainer = ({ src, alt }) => (
    <Box
      sx={{
        width: 90,
        height: 90,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <img
        src={src}
        alt={alt}
        style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }}
      />
    </Box>
  );

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

            <div className="skills-container">
              {/* Languages */}
              <div className="skill-column">
                <h3>Languages</h3>
                <img src="JS.png" alt="JavaScript" />
                <img src="TS.jpg" alt="TypeScript" />
                <img src="Python.jpeg" alt="Python" />
              </div>

              {/* Frontend */}
              <div className="skill-column">
                <h3>Frontend</h3>
                <img src="Ant.png" alt="Ant Design" />
                <img src="context.jpg" alt="Context API" />
                <img src="CSS.jpeg" alt="CSS" />
                <img src="Hooks.png" alt="Hooks" />
                <img src="HTML.png" alt="HTML" />
                <img src="ReactJS.jpg" alt="ReactJS" />
                <img src="Redux.png" alt="Redux Logo" />
              </div>


              {/* Backend */}
              <div className="skill-column">
                <h3>Backend</h3>
                <img src="Express.png" alt="Express"/>
                <img src="NodeJS.png" alt="Express" />
              </div>

              {/* Databases */}
              <div className="skill-column">
                <h3>Databases</h3>
                <img src="NoSQL.png" alt="NOSQL" />
                <img src="PostgreSQL.png" alt="PostgreSQL" />
                <img src="SQL.avif" alt="SQL" />
              </div>

              {/* Additional */}
              <div className="skill-column">
                <h3>Additional</h3>
                <img src="Agile.png" alt="Agile" />
                <img src="Axios.png" alt="Axios" />
                <img src="cypress.png" alt="cypress" />
                <img src="Debugging.jpg" alt="Debugging" />
                <img src="Deployment.png" alt="Deployment" />
                <img src="docker.png" alt="docker" />
                <img src="GitBash.png" alt="GitBash" />
                <img src="GitHub.png" alt="Github" />
                <img src="Heroku.png" alt="Heroku" />
                <img src="Jest.jpg" alt="Jest" />
                <img src="Netlify.png" alt="Netlify" />
                <img src="Vercel.png" alt="Vercel" />
                <img src="VSCode.png" alt="VSCode" />
                <img src="YUP.webp" alt="YUP" />
              </div>
            </div>

            <h2 className="projects-heading">Projects</h2>
            <div className="projects-container"></div>
          </section>
        )}
        {currentSection === "about" && (
          <section id="about">
            <h2>About Me</h2>
            <img
              src="53595298_10219476102837187_8932955788637372416_n (1).jpg"
              alt="Robert Dixon"
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
