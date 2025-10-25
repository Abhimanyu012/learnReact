import { useState, useEffect } from 'react'

const UseEffects = () => {
    const [counter, setCounter] = useState(0)
    const [data, setData] = useState(0)
    
    useEffect(() => {
        callonce()
    }, [counter])
    function callonce() {
        console.log("call once this function")
    }
    return (
        <div>UseEffects
            <button onClick={() => setCounter(counter + 1)} className='border-2 p-2 m-2'> counter:{counter}</button>
            <button onClick={() => setData(data + 1)} className='border-2 p-2 m-2'> data:{data}</button>

        </div>
    )
}

export default UseEffects