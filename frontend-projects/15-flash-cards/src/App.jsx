import { useState } from 'react'
import data from './data/data.js'
import ProgressBar from './components/ProgressBar/ProgressBar.jsx'
import './App.css'

function App() {
  const [index, setIndex] = useState(0)
  const [showAnswer, setShowAnswer] = useState(false)

  return (
    <>
    <h1>Flash Cards</h1>
    <ProgressBar index={index} width='25%' />
    </>
  )
}

export default App