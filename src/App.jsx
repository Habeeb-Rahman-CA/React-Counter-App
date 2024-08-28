import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)    
  
  return (
    <>
      <h1>{count}</h1>
      <div className="btns">
        <button onClick={() => setCount((count) => count < 9999 ? count + 1 : count = 0)}>+</button>
        <button onClick={() => setCount((count) => count = 0)}>Reset</button>
        <button onClick={() => setCount((count) => count > 0 ? count - 1 : count = 0)}>-</button>
      </div>
    </>
  )
}

export default App
