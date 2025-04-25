import React, { useState } from "react";
import "./styles.css";
import "./App.css";
import { Box } from "@mui/material"; // Import Box

function App() {
  const [currentSection, setCurrentSection] = useState("home");

  const navigateTo = (sectionId) => {
    setCurrentSection(sectionId);
  };

  const LogoContainer = ({ src, alt }) => (
    <Box
      sx={{
        width: 90, // Consistent width (match your CSS)
        height: 90, // Consistent height (adjust as needed)
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
            <h3>Languages</h3>
            <ul className="languages-list">
              <li className="language-item">
                <LogoContainer src="JS.png" alt="JS" />
              </li>
              <li className="language-item">
                <LogoContainer src="Python.jpeg" alt="Python" />
              </li>
              <li className="language-item">
                <LogoContainer src="TS.jpg" alt="TS" />
              </li>
            </ul>
            <h3>Frontend</h3>
            <ul>
              <li>
                <LogoContainer src="Ant.png" alt="Ant Design" />
              </li>
              <li>
                <LogoContainer src="context.jpg" alt="Context API Logo" />
              </li>
              <li>
                <LogoContainer src="CSS.jpeg" alt="CSS Logo" />
              </li>
              <li>
                <LogoContainer src="Hooks.png" alt="Hooks Logo" />
              </li>
              <li>
                <LogoContainer src="HTML.png" alt="HTML Logo" />
              </li>
              <li>
                <LogoContainer src="ReactJS.jpg" alt="ReactJS Logo" />
              </li>
              <li>
                <LogoContainer src="Redux.png" alt="Redux Logo" />
              </li>
            </ul>
            <h3>Backend</h3>
            <ul>
              <li>
                <LogoContainer src="Express.png" alt="Express" />
              </li>
              <li>
                <LogoContainer src="NodeJS.png" alt="Express" />
              </li>
            </ul>
            <h3>Databases</h3>
            <ul>
              <li>
                <LogoContainer src="NoSQL.png" alt="NOSQL" />
              </li>
              <li>
                <LogoContainer src="PostgreSQL.png" alt="PostgreSQL" />
              </li>
              <li>
                <LogoContainer src="SQL.avif" alt="SQL" />
              </li>
            </ul>
            <h3>Additional</h3>
            <ul className="additional-skills-list">
              <li className="additional-item">
                <LogoContainer src="Agile.png" alt="Agile" />
              </li>
              <li className="additional-item">
                <LogoContainer src="Axios.png" alt="Axios" />
              </li>
              <li className="additional-item">
                <LogoContainer src="cypress.png" alt="cypress" />
              </li>
              <li className="additional-item">
                <LogoContainer src="Debugging.jpg" alt="Debugging" />
              </li>
              <li className="additional-item">
                <LogoContainer src="Deployment.png" alt="Deployment" />
              </li>
              <li className="additional-item">
                <LogoContainer src="docker.png" alt="docker" />
              </li>
              <li className="additional-item">
                <LogoContainer src="GitBash.png" alt="GitBash" />
              </li>
              <li className="additional-item">
                <LogoContainer src="GitHub.png" alt="Github" />
              </li>
              <li className="additional-item">
                <LogoContainer src="Heroku.png" alt="Heroku" />
              </li>
              <li className="additional-item">
                <LogoContainer src="Jest.jpg" alt="Jest" />
              </li>
              <li className="additional-item">
                <LogoContainer src="Netlify.png" alt="Netlify" />
              </li>
              <li className="additional-item">
                <LogoContainer src="Vercel.png" alt="Vercel" />
              </li>
              <li className="additional-item">
                <LogoContainer src="VSCode.png" alt="VSCode" />
              </li>
              <li className="additional-item">
                <LogoContainer src="YUP.webp" alt="YUP" />
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

