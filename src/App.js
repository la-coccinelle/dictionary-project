import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  const keywordsArray = [
    "book",
    "cat",
    "countryside",
    "egg",
    "forest",
    "fruit",
    "happiness",
    "house",
    "lily",
    "red",
    "smile",
    "sunrise",
    "sunset",
    "tree",
    "yellow",
    "yoga",
    "zoo",
  ];

  const randomKeyword =
    keywordsArray[Math.floor(Math.random() * keywordsArray.length)];

  return (
    <div className="App">
      <div className="container">
        <h1 className="App-header">Dictionary</h1>
        <main>
          <Dictionary defaultKeyword={randomKeyword} />
        </main>
        <footer className="App-footer">
          <small>
            This project was coded by Monika Grzegorczyk, is{" "}
            <a
              href="https://github.com/la-coccinelle/dictionary-project"
              target="_blank"
              rel="noopener noreferrer"
            >
              open-sourced on GitHub
            </a>{" "}
            and{" "}
            <a
              href="https://pensive-ardinghelli-2979b9.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              hosted on Netlify.
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}
