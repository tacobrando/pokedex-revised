import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Pokedex from './components/Pokedex/Pokedex'
import SideBarSVG from './components/svg/sidebarSVG'
import './App.css'

function App() {
  const [count, setCount] = useState(0)


  return (
    <div className="App">
      <header className="App-header flex flex-col">
        <div className="navbar">
          <Navbar />
        </div>
        <div className="main flex-1 relative">
          <SideBarSVG />
          <Pokedex />
        </div>
      </header>
    </div>
  )
}

export default App
