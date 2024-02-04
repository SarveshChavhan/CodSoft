import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  let counter=5

  const addValue=()=>{

    console.log("value added",Math.random());
    
  }

  return (
    <>
      <h1>hello</h1>
      <h2>Counter Value:{counter}</h2>
      <br/>

      <button onClick={addValue}>add value</button>
      <br/>

      <button>remove value</button>
      <p>footer: {count}</p>
    </>
  )
}

export default App
