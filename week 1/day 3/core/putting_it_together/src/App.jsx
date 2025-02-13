import './App.css'
import Birthday from './components/Birthday'

function App() {

  return (
    <>
    <Birthday firstName="Jane" lastName="Doe" initialAge={45} hairColor="Black" />
    <Birthday firstName="John" lastName="Smith" initialAge={88} hairColor="Brown" />
    </>
  )
}

export default App
