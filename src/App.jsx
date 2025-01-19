import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
// import Bg from './components/bg'
function App() {
  const [color, setColor] = useState('yellowgreen')

  return (
    <div className='w-screen h-screen ' style={{backgroundColor:color}}>
      <div className=' flex justify-around m-4 absolute w-screen bottom-0'>
        <button onClick={()=>setColor('red')} className='bg-red-800 w-24 p-2 rounded-lg'>Red</button>
        <button onClick={()=>setColor('green')} className='bg-green-500 w-24 p-1 rounded-lg'>Green</button>
        <button onClick={()=>setColor('blue')} className='p-1 bg-blue-900 w-24 rounded-lg text-white'>Blue</button>
        <button onClick={()=>setColor('violet')} className='p-1 text-white w-24 rounded-lg bg-violet-950'>Violet</button>
        <button onClick={()=>setColor('gray')} className='p-1 text-white w-24 rounded-lg bg-gray-900'>Gray</button>
        <button onClick={()=>setColor('yellow')} className='p-1 text-white w-24 rounded-lg bg-yellow-600'>Yellow</button>
        <button onClick={()=>setColor('pink')} className='p-1 text-white w-24 rounded-lg bg-pink-700'>Pink</button>
        <button onClick={()=>setColor('purple')} className='p-1 text-white w-24 rounded-lg bg-purple-800'>Purple</button>
        <button onClick={()=>setColor('slate')} className='p-1 text-white w-24 rounded-lg bg-yellow-950'>Lavender</button>
        <button onClick={()=>setColor('white')} className='p-1 bg-white w-24 text-black rounded-lg'>White</button>
        <button onClick={()=>setColor('black')} className='p-1 bg-black w-24 rounded-lg text-white'>Black</button>
      </div>
    </div>
  )
}

export default App
