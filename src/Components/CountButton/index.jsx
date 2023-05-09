import React, {useState} from 'react';


function CountButton() {

  const [count, setCount] = useState(0);
  const increment = (value) => {
    setCount(count + value);
  }
  const decrement = (value) => {
    setCount(count - value);
  }
  return (
    <div className="Counter">
      <header className="CounterHeader">
        <button onClick={() => increment}>Add</button>
        <button onClick={() => decrement}>Subtract</button>
        </header>
    </div>
  )
}
export default CountButton;