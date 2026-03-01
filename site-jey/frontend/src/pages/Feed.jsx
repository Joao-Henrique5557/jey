import '../styles/feed.css';
import { useState } from "react";
import Grade_pubs from '../components/grade_pubs';

const Feed = () => {
  const [dark, setDark] = useState(false);

    // funções
    
  const toggleTheme = () => {
      if (dark === false) {
          document.documentElement.classList.add("dark");
          setDark(true);
      } else {
          document.documentElement.classList.remove("dark");
          setDark(false);
      }
  }

  return (
    <div id="feed">
      <header id='header'>
        <h1>Jey</h1>
        <span className="material-symbols-outlined themeLogin" onClick={toggleTheme}>
            {!dark ? "dark_mode" : "light_mode"}
        </span>
      </header>
      <div id='corpo'>
        <div id='barra_lateral'>
          <span className="material-symbols-outlined">house</span>
          <span className="material-symbols-outlined">search</span>
          <span className="material-symbols-outlined">account_circle</span>
          <span className="material-symbols-outlined">add</span>
          <span className="material-symbols-outlined">chat</span>
        </div>
        <div id='conteudo'>
          <Grade_pubs />
        </div>
      </div>
    </div>
  );
};

export default Feed;