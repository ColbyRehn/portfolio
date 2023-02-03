import React, { useState, useRef } from 'react';
import './App.css';
import home from './home.svg'
import about from './about.svg'
import project from './bulb.svg'
import contact from './contact.svg'
import blob from './blob.svg'
import aboutWave from './about-wave.svg'
import selfie from './selfie.svg'
import burger from './burger-menu.svg'
import cross from './cross.svg'
import homeButton from './home-button.svg'
import profileButton from './profile-button.svg'
import projectButton from './bulb-button.svg'
import contactButton from './contact-button.svg'

function App() {
  const [isCross, setIsCross] = useState(true);
  function burgerIcon(event) {
    event.stopPropagation();
    var burgerIcon = document.getElementById("Burger-icon").style;
    var crossIcon = document.getElementById("Cross-icon").style;
    var menu = document.getElementById("Burger-column").style;
    setIsCross(!isCross);
    if (isCross) {
      crossIcon.display = "initial";
      burgerIcon.display = "none";
      menu.display = "flex";
    } else {
      burgerIcon.display = "initial";
      crossIcon.display = "none";
      menu.display = "none";
    }
  }

  const homeSection = useRef(null);
  const aboutSection = useRef(null);
  const projectSection = useRef(null);
  const contactSection = useRef(null);
  function scrollTo(event, ref) {
    event.stopPropagation();
    if (ref.current) {
      ref.current.scrollIntoView({top: ref.current.scrollHeight, behavior: "smooth"});
      burgerIcon(event);
    }
  }

  return (
    <body style={{display: "block"}}>
      <div id="Burger-menu-button" onClick={(e) => burgerIcon(e)}>
        <img id="Burger-icon" src={burger} alt="burger-icon" />
        <img id="Cross-icon" src={cross} alt="cross-icon" />
      </div>
      <div id="Burger-column">
        <div style={{flexDirection: "column"}}>
          <div class="Burger-page-button" onClick={(e) => scrollTo(e, homeSection)}>
            <img src={homeButton} alt="burger-icon" />
            <text class="Burger-button-text">Home</text>
          </div>
          <div class="Burger-page-button" onClick={(e) => scrollTo(e, aboutSection)}>
            <img src={profileButton} alt="profile-icon" />
            <text class="Burger-button-text">About</text>
          </div>
          <div class="Burger-page-button" onClick={(e) => scrollTo(e, projectSection)}>
            <img src={projectButton} alt="project-icon" />
            <text class="Burger-button-text">Projects</text>
          </div>
          <div class="Burger-page-button" onClick={(e) => scrollTo(e, contactSection)}>
            <img src={contactButton} alt="contact-icon" />
            <text class="Burger-button-text">Contact</text>
          </div>
        </div>
      </div>
      <section class="Header-section">
          <img class="Header-icon" src={home} alt="home-icon"/>
          <text class="Icon-name">HOME<br/></text>
        </section>
      <div ref={homeSection} id="Home-page" class="Page-container">
        <img id="Blob-bg" src={blob} alt="blob"/>
        <section id="Home-section">
          <img id="Profile-picture" src={selfie} alt="Colby"/>
          <text class="Home-heading">Hello!<br/></text>
          <text class="Home-heading">I'm Colby.<br/></text>
          <text class="Home-subheading">A software engineer<br/></text>
          <text class="Home-subheading">student from Australia.</text>
        </section>
      </div>
      <section class="Header-section">
          <img class="Header-icon" src={about} alt="profile-icon"/>
          <text class="Icon-name">ABOUT<br/></text>
      </section>
      <div ref={aboutSection} id="About-page" class="Page-container">
        <img id="about-wave-bg" src={aboutWave} alt="wave"/>
        <section id="About-section">
          <text class="About-heading">Why do I code?<br/></text>
          <text class="About-text">I enjoy bringing creative ideas to life. The<br/></text>
          <text class="About-text">process of software design challenges<br/></text>
          <text class="About-text">me to adapt to new & exciting tools.<br/></text>
          <div style={{height: "60px"}}></div>
          <text class="About-heading">What are my goals?<br/></text>
          <text class="About-text">I aim to create inclusive & accessible <br/></text>
          <text class="About-text">products for a diverse audience. Also,<br/></text>
          <text class="About-text">I strive to improve people’s well-being.<br/></text>
        </section>
      </div>
      <section class="Header-section">
          <img class="Header-icon" src={project} alt="project-icon"/>
          <text class="Icon-name">PROJECTS<br/></text>
      </section>
      <div ref={projectSection} id="Project-page" class="Page-container">
      </div>
      <section class="Header-section">
          <img class="Header-icon" src={contact} alt="contact-icon"/>
          <text class="Icon-name">CONTACT<br/></text>
      </section>
      <div ref={contactSection} id="Contact-page" class="Page-container">
      </div>
    </body>
  );
}

export default App;
