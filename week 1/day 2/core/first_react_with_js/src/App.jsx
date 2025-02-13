import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Hello Dojo</h1>
      <h3>Things I nedd to do:</h3>
      <ul>
        <li>Learn React</li>
        <li>Climb My.Everest</li>
        <li>Run a marathon</li>
        <li>Feed the dogs</li>
      </ul>
    </>
  )
}

export default App