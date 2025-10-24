import React from 'react'

const User = ({ name ="new user" }) => {
    return (
        <div className="m-6 p-5 bg-amber-100 shadow-2xl text-2xl w-full flex items-center justify-center flex-col gap-2">
            <h1>User component</h1>
            <hr className='text-black border-2 w-full' />
            <p>user name is : {name} </p>
            <p>user age is {name.age} </p>
            <p>user email is {name.email} </p>

        </div>
    )
}

export default User