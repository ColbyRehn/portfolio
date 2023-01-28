import './App.css';
import profile from './profile.svg'

function App() {
  return (
  <div id="Home-page" class="Page-container">
    <section id="Home-content-section">
      <text class="Home-heading">Hello!<br /></text>
      <text class="Home-heading">I'm Colby.<br /></text>
      <text class="Home-subheading">A software engineer<br /></text>
      <text class="Home-subheading">student from Australia.<br /></text>
      <img id="Profile-picture" src={profile} alt="Colby Rehn"/>
    </section>
  </div>
  );
}

export default App;
