import React, {useContext} from 'react';
import ValueContext from './valueContext'

import './App.css';

function Child() {
    let  value = useContext(ValueContext);
  return (
    <div>
      Child number = {value}
    </div>
  );
}

export default Child;
