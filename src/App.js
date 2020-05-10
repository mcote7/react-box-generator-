import React, { useState } from  'react';
import './App.css';
import BoxForm from './components/BoxForm';
import BoxDisplay from './components/BoxDisplay';

function App() {
  const [boxes, setBoxes] = useState([{
    backgroundColor: "",
    height: "",
    width: "",
    style: {
        display: "",
        backgroundColor: "",
        border: "",
        height: "",
        width: "",
  }}]);
  return (
    <div className="App">
      <BoxForm boxes={boxes} setBoxes={setBoxes}/>
      <BoxDisplay boxes={boxes}/>
    </div>
  );
}

export default App;
