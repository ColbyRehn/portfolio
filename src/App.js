import React, { useState } from 'react';
import './App.css';
import home from './home.svg'
import blob from './blob.svg'
import profile from './profile.svg'
import burger from './burger-menu.svg'
import cross from './cross.svg'
import homeButton from './home-button.svg'
import profileButton from './profile-button.svg'
import projectButton from './bulb-button.svg'
import contactButton from './contact-button.svg'

function App() {
  const [isCross, setIsCross] = useState(true);
  function burgerIcon(event) {
    var element = document.getElementById("Burger-icon");
    var menu = document.getElementById("Burger-column").style;
    setIsCross(!isCross);
    if (isCross) {
      element.src = cross;
      element.alt = "cross-icon";
      menu.display = "flex";
    } else {
      element.src = burger;
      element.alt = "burger-icon";
      menu.display = "none";
    }
  }

  return (
    <body style={{display: "block"}}>
      <div id="Burger-menu-button" onClick={burgerIcon}>
        <img id="Burger-icon" src={burger} alt="burger-icon" />
      </div>
      <div id="Burger-column">
        <div style={{display: "block"}}>
          <div class="Burger-page-button">
            <img src={homeButton} alt="burger-icon" />
            <text class="Burger-button-text">Home</text>
          </div>
          <div class="Burger-page-button">
            <img src={profileButton} alt="profile-icon" />
            <text class="Burger-button-text">Profile</text>
          </div>
          <div class="Burger-page-button">
            <img src={projectButton} alt="project-icon" />
            <text class="Burger-button-text">Projects</text>
          </div>
          <div class="Burger-page-button">
            <img src={contactButton} alt="contact-icon" />
            <text class="Burger-button-text">Contact</text>
          </div>
        </div>
      </div>
      <div id="Home-page" class="Page-container">
        <section class="Header-section">
          <img id="Home-icon" src={home} alt="home-icon"/>
          <text class="Icon-name">HOME<br/></text>
        </section>
        <img id="Blob-bg" src={blob} alt="blob"/>
        <section id="Home-section">
          <img id="Profile-picture" src={profile} alt="Colby"/>
          <text class="Home-heading">Hello!<br/></text>
          <text class="Home-heading">I'm Colby.<br/></text>
          <text class="Home-subheading">A software engineer<br/></text>
          <text class="Home-subheading">student from Australia.</text>
        </section>
      </div>
      <div id="About-page" class="Page-container">

      </div>
    </body>
  );
}

export default App;
