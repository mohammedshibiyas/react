import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// import Nav from './component/form/navbar/navabar'
// import Form from './component/form/Form'
import Uncontrol from "./component/form/Uncontroll"
import Uncontrolled from './component/form/Uncontroll'
import Controlled from './component/form/controll'
import Counter from './component/form/State'
// import Loop from './component/loop/Loop'
import Props from "./component/form/Props"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Uncontrolled/>
    {/* <Controlled/> */}
    {/* <Counter/> */}
    {/* <Props/> */}
    
    </>
  )
}

export default App
