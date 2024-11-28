import { useState } from 'react'
import data from './data/data.js'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>{data[count].question}</h1>
    <h2>{data[count].answer}</h2>
    <button onClick={_ => setCount(prevCount => prevCount + 1)}>Next</button>
    <button onClick={_ => setCount(prevCount => prevCount - 1)}>Previous</button>
    </>
  )
}

export default App