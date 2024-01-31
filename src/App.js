import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App container">
      <h1>Dictionary</h1>
      <Dictionary />
      <footer>
        <p>
          Coded by{" "}
          <a
            href="https://github.com/greenough-h"
            target="_blank"
            rel="noreferrer"
          >
            Hayley Greenough
          </a>{" "}
          and hosted on{" "}
          <a
            href="https://gleeful-cendol-aed12f.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            netlify
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
