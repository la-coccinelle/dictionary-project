import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1 className="App-header">Dictionary</h1>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">
          <small>Coded by Monika</small>
        </footer>
      </div>
    </div>
  );
}
