import './App.css'
import BookDetails from './components/BookDetails'
import Books from './components/Books'
import Create from './components/Create'
import NavBar from './components/NavBar'
import {Route,Routes,BrowserRouter as Router} from "react-router-dom"
import Update from "./components/Update";

function App() {

  return (
    <>
      <Router>
      <NavBar/>
        <Routes>
          <Route path='/' element={<Books/>}/>
          <Route path='/book/:id' element={<BookDetails/>}/>
          <Route path='/book/create' element={<Create/>}/>
          <Route path="/book/edit/:id" element={<Update/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
