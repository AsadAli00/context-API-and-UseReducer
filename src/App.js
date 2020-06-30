import React from 'react';
import './App.css';
import Parent from './parent';
import ValueContext from './valueContext'

function App() {
  // let [number,setNumber] = useState(78);
  let value = 81;

  return (
    <ValueContext.Provider value={value}>
      <div>
      Hello World!
      <Parent>
      </Parent>
    </div>
    </ValueContext.Provider>
    
  );
}

export default App;
