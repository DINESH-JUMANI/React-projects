import { useState } from "react"


function App() {
  const [color, setColor] = useState('white');


  return (
    <>
      <div className="w-full h-screen " style={{ backgroundColor: color }}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-black  px-3 py-2 rounded-3xl">
            <button className="outline-none px-4 py-2 rounded-full text-white shadow-lg" style={{ backgroundColor: 'red' }} onClick={() => setColor('red')}>Red</button>
            <button className="outline-none px-4 py-2 rounded-full text-white shadow-lg" style={{ backgroundColor: 'green' }} onClick={() => setColor('green')}>Green</button>
            <button className="outline-none px-4 py-2 rounded-full text-white shadow-lg" style={{ backgroundColor: 'blue' }} onClick={() => setColor('blue')}>Blue</button>
            <button className="outline-none px-4 py-2 rounded-full text-white shadow-lg" style={{ backgroundColor: 'pink' }} onClick={() => setColor('pink')}>Pink</button>
            <button className="outline-none px-4 py-2 rounded-full text-white shadow-lg" style={{ backgroundColor: 'brown' }} onClick={() => setColor('brown')}>Brown</button>
            <button className="outline-none px-4 py-2 rounded-full text-white shadow-lg" style={{ backgroundColor: 'orange' }} onClick={() => setColor('orange')}>Orange</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
