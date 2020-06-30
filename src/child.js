import React, {useContext} from 'react';
import ValueContext from './valueContext'

import './App.css';

function Child() {
    let  value = useContext(ValueContext);
  return (
    <div>
      Child number = {value}
      <button onClick={()=> value[1](++value[0])}>Update value</button>
    </div>
  );
}

export default Child;
