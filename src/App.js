import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [numberOfClicks, setNumberOfClicks] = useState(0);

  const mainParagraph = {
    fontSize: 130/2,
    backgroundColor: "red",
    padding: "10rem"
  };
  const buttonStyle = {
    backgroundColor: "green",
    color: "white",
    margin: 25
  };
  
  const handleOnClick = () => { 
    setNumberOfClicks(numberOfClicks + 1); 
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p style={mainParagraph}>
          Matthew
        </p>
        <button style={buttonStyle} type="button" onClick={handleOnClick}>Click Me!</button>
        <div><p>{numberOfClicks}</p></div>
      </header>
    </div>
  );
}

export default App;