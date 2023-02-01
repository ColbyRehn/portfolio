import React from 'react';
import './App.css';
import home from './home.svg'
import blob from './blob.svg'
import profile from './profile.svg'
import burger from './burger-menu.svg'

function App() {
  return (
    <body style={{display: "block"}}>
      <div id="Burger-menu">
        <img id="Burger-icon" src={burger} alt="burger-icon"/>
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
