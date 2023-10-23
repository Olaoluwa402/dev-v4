import React, { useState } from 'react';
import styles from './NumberSelector.module.css'

function NumberSelector() {
  const [value, setValue] = useState(2);
  
  const handleValueChange = (event) => {
    setValue(event.target.value);
  };
  
  return (
    <input
      type="number"
      id="numberSelector"
      name="numberSelector"
      min="0"
      max="100"
      value={value}
      onChange={handleValueChange}
      className={styles.inputs}
    />
  );
}

export default NumberSelector;
