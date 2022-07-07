import logo from "./logo.jpg"
import Dictionary from "./Dictionary";
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary defaultKeyword="Sunrise"/>
        </main>
        <footer className="App-footer">
          <small>Coded by Faranak Sabet</small>
        </footer>
      </div>
    </div>
  );
}


