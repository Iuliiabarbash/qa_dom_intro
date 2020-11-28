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
        <div>
          Other stuff
          {/* Here is where we added the extra block of text in a paragraph tag */}
          <p> I like counting. </p>
        </div>
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
    this.decrementNumber = this.decrementNumber.bind(this);
  }

  // this function updates the number in the state
  incrementNumber() {
    // we're logging a message in the console every time incrementNumber is called.
    console.log(`Adding 1 to ${this.state.myNumber}`);
    this.setState((state) => {
      return { myNumber: state.myNumber + 1 };
    });
  }

  // this new function will reduce `myNumber` by 1
  decrementNumber() {
    console.log(`Removing 1 from ${this.state.myNumber}`);
    this.setState((state) => {
      return { myNumber: state.myNumber - 1 };
    });
  }

  render() {
    // this displays the current number AND tells the button to use the incrementNumber function()
    return (
      <div id='numberCounter'>
        {" "}
        {/*We added the id here*/}
        <h4> The number is: {this.state.myNumber}</h4>
        <button onClick={this.incrementNumber}>Add 1</button>
        <button onClick={this.decrementNumber}>Subtract 1</button>
        {/* now it also instructs the component to render the "Subtract 1" button, which uses the function decrementNumber */}
      </div>
    );
  }
}
