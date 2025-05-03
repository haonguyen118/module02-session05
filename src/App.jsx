import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Ex01 from './component/Exercise01/Ex01'
import Ex03 from './component/Exercise03/Ex03'
import Ex04 from './component/Exercise04/Ex04'
import Ex02 from './component/Exercise02/Ex02'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Ex01></Ex01> */}
      {/* <Ex03></Ex03> */}
      {/* <Ex04></Ex04> */}
      <Ex02></Ex02>
        
    </>
  )
}

export default App
