import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header></Header>
      <Weather></Weather>
      <Map></Map>
      <Stats></Stats>
      <NextDays></NextDays>
    </>
  )
}

export default App
