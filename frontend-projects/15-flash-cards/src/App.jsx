import { useState } from 'react'
import data from './data/data.js'
import Navegation from './components/Navegation/Navegation.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Flash Cards</h1>
    <Navegation />
    </>
  )
}

export default App