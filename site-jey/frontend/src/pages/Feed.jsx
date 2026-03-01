import '../styles/paginas/feed.css';
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
        <span className="material-symbols-outlined icons">dangerous</span>
        <span className="material-symbols-outlined icons" onClick={toggleTheme}>
            {!dark ? "dark_mode" : "light_mode"}
        </span>
      </header>
      <main>
        <div id='corpo'>
          <div id='barra_lateral'>
            <span className="material-symbols-outlined icons">search</span>
            <span className="material-symbols-outlined icons">account_circle</span>
            <span className="material-symbols-outlined icons">add</span>
            <span className="material-symbols-outlined icons">chat</span>
          </div>
          <div id='conteudo'>
            <Grade_pubs />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Feed;