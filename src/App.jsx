
import { useState } from 'react'
import User from './components/User'

const App = () => {

  // initialize as empty string so input is controlled for the component lifetime
  const [val, setVal] = useState('')
  return (
    <div className=' text-6xl flex flex-col justify-center items-center w-full overflow-y-auto bg-red-100 h-screen gap-10'>
      <h1>Enter your input</h1>
      <input type="text" value={val} onChange={(e) => setVal(e.target.value)} placeholder='Enter Your Name' className='bg-blue-50' />
      <button onClick={() => { setVal("") }} className='bg-pink-800 rounded-2xl p-5'>clear texts</button>
      <h2>{val}</h2>

    </div>
  )
}

export default App