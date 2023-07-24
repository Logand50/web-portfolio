import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Container, Navbar, Nav, Jumbotron, Row, Col } from "react-bootstrap";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";





const Home = () => (
  <Jumbotron fluid id="home" className="text-center">
    <Container>
      <h1>Logan Dye</h1>
      <p>Web and Software Developer</p>
      <p>Java, Python, JavaScript, React, Angular, Mongo DB, SQL, CSS, Bootstrap, HTML</p>
    </Container>
  </Jumbotron>
);

const About = () => (
  <section id="about">
    <h2>About Me</h2>
    <p>
    Hello! I'm Logan Dye, a highly knowledgeable and skilled student pursuing an Associate of Applied Science (AAS) degree in Software Development at Columbus State Community College. Proficient in an extensive range of programming languages including HTML, CSS, Python, Java, JavaScript, React, and SQL, I have gained comprehensive expertise through rigorous coursework and immersive projects. Currently excelling as a Tech Support Agent at Morgan Stanley, I leverage my strong technical knowledge to provide exceptional customer support while consistently demonstrating my problem-solving abilities in a fast-paced environment. With a deep understanding of software development principles and a passion for continuous learning, I possess a keen eye for detail and a knack for writing efficient and elegant code. As I seek Web and Software Developer opportunities, I am eager to apply my extensive programming knowledge to create innovative solutions and contribute to cutting-edge projects.
    </p>
  </section>
);

const Projects = () => (
  <section id="projects">
    <h2>Projects</h2>
    <Row>
      <Col md={4}>
        <div className="project-card">
          <h3>Tic-Tac-Toe Game</h3>
          <p>Tic-Tac-Toe with AI bot. Experimenting with simple AI programming in this Tic-Tac-Toe game. Programmed with Python.</p>
          <a href='https://github.com/Logand50/TicTacToe'>https://github.com/Logand50/TicTacToe</a>
          <img src='https://media.licdn.com/dms/image/D562DAQFNrmTwJsGe_g/profile-treasury-image-shrink_800_800/0/1687734404199?e=1690815600&v=beta&t=f-qwJrJh2b2Gy0WmopZq1Bd6SQYUoUdqbrHr-CW1ZrE'></img>
        </div>
      </Col>
      <Col md={4}>
        <div className="project-card">
          <h3>Snake Game</h3>
          <p>Classic snake game programmed using Python and pygame. Quick project created for fun.</p>
          <a href='https://github.com/Logand50/snake_pygame'>https://github.com/Logand50/snake_pygame</a>
          <img src='https://media.licdn.com/dms/image/D562DAQFHzzGI7EMbDA/profile-treasury-image-shrink_800_800/0/1687647063768?e=1690815600&v=beta&t=fXr7MrbBidpPaGA4Nm4LSFUHWl1bZlkxuu3cVq4SjlM'></img>

        </div>
      </Col>
      {/* Add more project cards as needed */}
    </Row>
  </section>
);


const Contact = () => (
  <section id="contact">
    <div className="contact-icons">
    <h2>Contact</h2>
    <p>Email: logandye50@gmail.com</p>
    <p>Phone Number: 614-507-3783</p>
    <p>Linkedin: <a id='contact-linkedin' href='https://www.linkedin.com/in/logan-dye-8b2b24256/'>https://www.linkedin.com/in/logan-dye-8b2b24256/</a></p>
    <p>GitHub: <a id='contact-git' href='https://github.com/Logand50'>https://github.com/Logand50</a></p>
    <a href="https://www.linkedin.com/in/logan-dye-8b2b24256/" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faLinkedin} />
    </a>  
    <a href="https://github.com/Logand50" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faGithub} />
    </a>

    </div>
  </section>
);

const App = () => {
  useEffect(() => {
    // Function to handle smooth scrolling
    const smoothScroll = (target) => {
      const element = document.querySelector(target);
      if (element) {
        window.scrollTo({
          top: element.offsetTop,
          behavior: "smooth"
        });
      }
    };

    // Attach smooth scrolling event listeners to the navigation links
    const links = document.querySelectorAll("a[href^='#']");
    links.forEach(link => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        smoothScroll(link.getAttribute("href"));
      });
    });
  }, []);

  return (
    <Router>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
        <Navbar.Brand href="#home">Logan Dye</Navbar.Brand>

            <Nav className="ml-auto">
              <Nav.Link as="a" href="#about">About</Nav.Link>
              <Nav.Link as="a" href="#projects">Projects</Nav.Link>
              <Nav.Link as="a" href="#contact">Contact</Nav.Link>
            </Nav>

        </Container>
      </Navbar>

      <div id="content">
        <Home />
        <About />
        <Projects />
        <Contact />
      </div>

      <footer className="bg-dark text-white text-center py-3">
        <p>&copy; {new Date().getFullYear()} Logan Dye's Portfolio. All rights reserved.</p>
      </footer>
    </Router>
  );
};



export default App;
