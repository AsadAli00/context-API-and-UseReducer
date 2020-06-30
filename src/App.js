import React, {useState} from 'react';
import './App.css';
import Parent from './parent';

function App() {
  // let [number,setNumber] = useState(78);
  let value = 81;

  return (
    <ValueContext.Provider value={value}>
      <div>
      Hello World!
      <Parent>
      </Parent>
      <button>
        Update Number
      </button>

    </div>
    </ValueContext.Provider>
    
  );
}

export default App;
