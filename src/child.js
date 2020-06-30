import React from 'react';
import './App.css';

function Child() {
    let  value = useContext(valueContext);
  return (
    <div>
      Child number = {value}
    </div>
  );
}

export default Child;
