
import './App.css'
import Hero from './components/Hero';
import NavBar from './components/NavBar';
import Experiencia from './components/Experiencia';


function App() {
 

  return (
    <div className='app'>
      <NavBar></NavBar>
      <div className="main-container">
      <Hero></Hero>
      <Experiencia></Experiencia>
      </div>
    </div>
  )
}

export default App
