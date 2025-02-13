import { useState } from 'react'

import './App.css'
import PersonCard from './PersonCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <div className="App">
            <PersonCard firstName="Jane" lastName="Doe" age={45} hairColor="Black" />
            <PersonCard firstName="John" lastName="Smith" age={88} hairColor="Brown" />
            <PersonCard firstName="Millard" lastName="Fillmore" age={50} hairColor="Blonde" />
            <PersonCard firstName="Maria" lastName="Smith" age={62} hairColor="Red" />
        </div>
    </>
  )
}

export default App
