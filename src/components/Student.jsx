import React from 'react'

const Student = ({name}) => {
  return (
    <div className='w-[90%] flex justify-center items-center text-2xl'>
        <p> student name :{name}</p>
    </div>
  )
}

export default Student