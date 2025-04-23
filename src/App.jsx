import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>YOUR SPACE TIFFIN </h1>
      <img src = "https://imgs.search.brave.com/cwCt8uvwprQ3xvNfeT1Hxs0aXkCiupAkmuN_sWc-ip0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2M1L2Qx/LzI1L2M1ZDEyNWQ5/NDZhYjQ0MDE1MWU1/MTM2MjlhY2FkZGQz/LmpwZw" alt= "img"></img>
    </>
  )
}

export default App
