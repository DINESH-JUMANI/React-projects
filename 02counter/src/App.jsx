import { useState } from "react";

function App() {
  let [counter, setCounter] = useState(10);
  const addvalue = () => {
    if (counter < 20) setCounter(counter + 1);
  }

  const decreaseValue = () => {
    if (counter > 0) setCounter(counter - 1);
  }
  function ErrorMessage(){
    if(counter < 1|| counter > 19) return <h1>Counter value is not in range</h1>;
  }
  return (
    <>
      <h1>Dinesh First Counter Project</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addvalue}>Increment</button>
      <button onClick={decreaseValue}>Decrement</button>
      <ErrorMessage/>
    </>
  )
}

export default App
