import React, { useState, useRef } from 'react';
import './App.css';
import './Query.css';
import CycleQueue from './CycleQueue.js';
import home from './home.svg'
import about from './about.svg'
import project from './bulb.svg'
import contact from './contact.svg'
import blob from './blob.svg'
import aboutWave from './about-wave.svg'
import waveDiagonal from './wave-diagonal.svg'
import selfie from './selfie.svg'
import burger from './burger-menu.svg'
import cross from './cross.svg'
import homeButton from './home-button.svg'
import profileButton from './profile-button.svg'
import projectButton from './bulb-button.svg'
import contactButton from './contact-button.svg'
import portfolioProject from './portfolio-project.svg'
import rightArrow from './right-arrow.svg'
import leftArrow from './left-arrow.svg'
import comingSoon from './coming-soon.svg'
import contactCircle from './contact-circle.svg'


function App() {
  const [isCross, setIsCross] = useState(true);
  function burgerIcon(event) {
    event.stopPropagation();
    const burgerIcon = document.getElementById("Burger-icon").style;
    const crossIcon = document.getElementById("Cross-icon").style;
    const menu = document.getElementById("Burger-column").style;
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


  var curr = null;
  var cycleQueue = null;
  function initCards(event) {
    event.stopPropagation();
    const portfolio = document.getElementById("Portfolio-card").style;
    const future = document.getElementById("Coming-soon-card").style;
    curr = portfolio;
    cycleQueue = new CycleQueue();
    cycleQueue.enqueue(portfolio);
    cycleQueue.enqueue(future);
  }

  function nextCard(event) {
    event.stopPropagation();
    if (curr === null || cycleQueue === null) {
      initCards(event);
    }

    var next = cycleQueue.dequeue()
    if (curr === next) {
      next = cycleQueue.dequeue();
    }
    curr.display = "none";
    next.display = "flex";
    curr = next;
  }

  var prevScrollpos = window.pageYOffset;
  window.onscroll = function() {
    if (isCross) {
      var currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        document.getElementById("Burger-menu-button").style.top = "0.8vw";
      } else  {
        document.getElementById("Burger-menu-button").style.top = "-100px";
      }
      prevScrollpos = currentScrollPos;
    }
  }

  return (
      <div style={{overflowX: "hidden", position: "relative"}}>
        <div id="Burger-menu-button" onClick={(e) => burgerIcon(e)}>
          <img id="Burger-icon" src={burger} alt="burger-icon" />
          <img id="Cross-icon" src={cross} alt="cross-icon" />
        </div>
        <div id="Burger-column">
          <div class="Burger-page-button" onClick={(e) => scrollTo(e, homeSection)}>
            <img class="Burger-icon" src={homeButton} alt="burger-icon" />
            <text class="Burger-button-text">Home</text>
          </div>
          <div class="Burger-page-button" onClick={(e) => scrollTo(e, aboutSection)}>
            <img class="Burger-icon" src={profileButton} alt="profile-icon" />
            <text class="Burger-button-text">About</text>
          </div>
          <div class="Burger-page-button" onClick={(e) => scrollTo(e, projectSection)}>
            <img class="Burger-icon" src={projectButton} alt="project-icon" />
            <text class="Burger-button-text">Projects</text>
          </div>
          <div class="Burger-page-button" onClick={(e) => scrollTo(e, contactSection)}>
            <img class="Burger-icon" src={contactButton} alt="contact-icon" />
            <text class="Burger-button-text">Contact</text>
          </div>
        </div>
        <section class="Header-section">
            <img class="Header-icon" src={home} alt="home-icon"/>
            <text class="Icon-name">HOME<br/></text>
          </section>
        <div ref={homeSection} id="Home-page" class="Page-container">
          <img id="Blob-bg" src={blob} alt="blob"/>
          <section id="Home-section">
            <div id="Home-content">
              <text class="Home-heading">Hello!<br/></text>
              <text class="Home-heading">I'm Colby.<br/></text>
              <text class="Home-subheading">A software engineer<br/></text>
              <text class="Home-subheading">student from Australia.</text>
            </div>
            <div id="Home-space"></div>
            <img id="Profile-picture" src={selfie} alt="Colby"/>
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
            <div id="About-space"></div>
            <text class="About-heading">What are my goals?<br/></text>
            <text class="About-text">I aim to create inclusive & accessible <br/></text>
            <text class="About-text">products for a diverse audience. Also,<br/></text>
            <text class="About-text">I strive to improve people’s well-being<br/></text>
            <text class="About-text">through secure & entertaining apps.<br/></text>
          </section>
        </div>
        <section class="Header-section">
            <img class="Header-icon" src={project} alt="project-icon"/>
            <text class="Icon-name">PROJECTS<br/></text>
        </section>
        <div ref={projectSection} id="Project-page" class="Page-container">
          <img id="wave-diagonal-bg" src={waveDiagonal} alt="wave"/>
          <section id="Project-section">
            <text class="Project-heading">Here is my<br/></text>
            <text class="Project-heading">project timeline<br/></text>
            <div id="Project-space"></div>
            <section id="Card-section">
              <div id="Card-left-button" class="Card-button" onClick={(e) => nextCard(e)}>
                <img src={leftArrow} alt="left-button"/>
              </div>
              <div id="Portfolio-card" class="Card">
                  <img class="Card-image" src={portfolioProject} alt="Portfolio"/>
                  <text class="Card-heading">Portfolio</text>
                  <section class="Card-content">
                    <text class="Card-text">Designed UI elements in Figma & programmed with React.js.</text>
                  </section>
                  <text class="Card-year">2023</text>
              </div>
              <div id="Coming-soon-card" class="Card">
                <img class="Card-image" src={comingSoon} alt="Coming soon"/>
                  <text class="Card-heading">VR Room</text>
                  <section class="Card-content">
                    <text class="Card-text">Check back later this project is in development!</text>
                  </section>
                  <text class="Card-year">???</text>
              </div>
              <div id="Card-right-button" class="Card-button" onClick={(e) => nextCard(e)}>
                <img src={rightArrow} alt="right-button"/>
              </div>
            </section>
          </section>
        </div>
        <section class="Header-section">
            <img class="Header-icon" src={contact} alt="contact-icon"/>
            <text class="Icon-name">CONTACT<br/></text>
        </section>
        <div ref={contactSection} id="Contact-page" class="Page-container">
          <section id="Contact-circle-section">
            <img id="Contact-circle" src={contactCircle} alt="Circle"/>
          </section>
          <section id="Contact-section">
            <text class="Contact-heading">Let's chat!</text>
            <a id="Contact-button" href="mailto:rehn.colby@gmail.com">Email Me</a>
          </section>
          
        </div>
      </div>
  );
}

export default App;
