import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [show, setShow] = useState(true) // show is a variable - true or false and controls whether the title is shown or not
// onClick = () => setShow(show => !show)
// onClick, do something, run setShow with show as a param, and set it to the opposite.
  return (
    <>
      <div className="wrapper">
        <button onClick={() => setShow(show => !show)}>{show ? <h1>Hide</h1> : <h1>Show</h1>}</button> 
        {show ? <h1>Showing the title</h1> : null}


      </div>

    </>
  )
}

export default App
