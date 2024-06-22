import { useState } from 'react'
import './App.css'
import Card from './components/Card'


function App() {
  return (
    <>
      <h1 className='text-black bg-green-400 p-3 rounded-xl mb-4'>Tailwind test</h1>
      <Card username="Dinesh" buttonText='Button1' />
      <Card buttonText='Button2' />
      <Card />
    </>
  )
}

export default App
