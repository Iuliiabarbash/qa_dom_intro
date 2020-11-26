import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div>
      <header>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
      <main>
        <div>Hello world!</div>
      </main>
      <footer>Goodbye</footer>
    </div>
  );
}

export default App;
