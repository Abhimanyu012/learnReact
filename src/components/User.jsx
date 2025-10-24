import React, { useState } from 'react'

const User = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    return (
        <>

            <div className=' text-2xl flex flex-col justify-center items-center w-full overflow-y-auto bg-red-100 h-screen gap-10'>
                <h1>Enter your input</h1>
                <form action="" className='flex flex-col gap-5 text-base'>

                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} className='bg-blue-200 p-2 ' placeholder='enter your name ' />

                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='enter your password ' className='bg-blue-200 p-2 ' />

                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='enter your email ' className='bg-blue-200 p-2 ' />

                    <button className='border-2 rounded-2xl h-10 bg-blue-950 text-yellow-50'>Submit</button>
                    <button className='border-2 rounded-2xl h-10 bg-blue-950 text-yellow-50'
                        onClick={() => { setEmail(""), setName(""), setPassword("") }}>
                        clear
                    </button>
                </form>

                <div className='bg-yellow-300 h-1/2 w-1/2 flex flex-col p-5 items-center justify-center         text-center'>
                    <p>{name}</p>
                    <p>{password}</p>
                    <p>{email}</p>
                </div>

            </div>

        </>
    )
}

export default User