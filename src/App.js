import './App.css';
import blob from './blob.svg'
import profile from './profile.svg'

function App() {
  return (
  <div id="Home-page" class="Page-container">
    <img id="Blob-bg" src={blob} alt="blob"/>
    <section id="Home-section">
        <img id="Profile-picture" src={profile} alt="Colby"/>
        <text class="Home-heading">Hello!<br/></text>
        <text class="Home-heading">I'm Colby.<br/></text>
        <text class="Home-subheading">A software engineer<br/></text>
        <text class="Home-subheading">student from Australia.</text>
    </section>
  </div>
  );
}

export default App;
