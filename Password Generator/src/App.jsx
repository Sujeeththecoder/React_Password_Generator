import { useState } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setcharAllowed] = useState(false)
  const [password, setPassword] = useState("")
  return (
    <>
      <h1 className='text-5xl text-center text-red-400'>Password Generator</h1>
    </>
  )
}

export default App
