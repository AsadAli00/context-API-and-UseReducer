import React,{useState} from 'react';
import './App.css';
import Parent from './parent';
import ValueContext from './valueContext'

function App() {
  let value = useState(48);

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
