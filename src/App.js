import './App.css';
import booklogo from "./booklogo.png";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <header className="app-header">
        <img src={booklogo} className="app-logo img-fluid" alt="logo" />
        <h1>Dictionary Search</h1>
      </header>
      <main>
        <Dictionary />
      </main>
      <footer className="app-footer">
        <a href="https://github.com/bexlex/dictionary-project">Open-Source Code</a> by Bekah Forni
      </footer>
    </div>

  );

}

