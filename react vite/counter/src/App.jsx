import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import Nav from './component/form/navbar/navabar'
import Form from './component/form/form'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   
    <Form/>
    </>
  )
}

export default App
