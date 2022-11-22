
import './App.css';
import Counter from './components/Counter.js'
import Model from './components/Model.js'
import { useState } from 'react';
import Plane from './components/Plane';

function App() {

  const [counter, setCounter] = useState(0);
  const handleClick = (btn) => {
    if (btn === 0) {
      setCounter(counter - 1)
    } else if (btn === 1) {
      setCounter(counter + 1)
    }
  }
  return (
    <div className="App">

      <Counter counter={counter} clickMe={handleClick} />
      <Model counter={counter} />
      <Plane imgSrc='./assets/images/plane.png' height={counter} />
    </div>
  );
}

export default App;
