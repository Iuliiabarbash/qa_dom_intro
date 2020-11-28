import logo from "./logo.svg";
import { Component } from "react";
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
        <div>Other stuff</div>
        <Counter /> {/* React knows to use the Counter component here. */}
      </main>
      <footer>Goodbye</footer>
    </div>
  );
}

export default App;

class Counter extends Component {
  constructor() {
    super();
    // the number is stored in the component here
    this.state = { myNumber: 0 };
    this.incrementNumber = this.incrementNumber.bind(this);
  }

  // this function updates the number in the state
  incrementNumber() {
    // we're logging a message in the console every time incrementNumber is called.
    console.log(`Adding 1 to ${this.state.myNumber}`);
    this.setState((state) => {
      return { myNumber: state.myNumber + 1 };
    });
  }

  render() {
    // this displays the current number AND tells the button to use the incrementNumber function()
    return (
      <div>
        <h4> The number is: {this.state.myNumber}</h4>
        <button onClick={this.incrementNumber}>Add 1</button>
      </div>
    );
  }
}
