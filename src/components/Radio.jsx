import React, { useState } from 'react'

const Radio = () => {

    const [gender, setGender] = useState('Female')
    const [city, setCity] = useState('')


    return (
        <div className=' p-25 mt-5 w-full justify-center items-center gap-5 bg-amber-200 h-1/2'>

            <div className='bg-blue-100 p-25'>
                <h1>Gender Radio button</h1>
                <input type="radio" name='gender' checked={gender == 'Male'} value={'Male'} id='male' className='m' onChange={(e) => setGender(e.target.value)
                } />
                <label htmlFor="male" className='mr-5 ml-1'>Male</label>
                <input type="radio" checked={gender == 'Female'} name='gender' value={'Female'} id='female' onChange={(e) => setGender(e.target.value)} />
                <label htmlFor="female" className='ml-1'>Female</label>
            </div>

            <h2 className='rounded-2xl bg-cyan-50 w-60 p-5 mt-3 '>Selected gender : {gender}</h2>


            <h4>select city</h4>
            <select name="" id=""  onChange={(e)=>{setCity(e.target.value)}} className='w-50 bg-red-300 h-15 m-2 p-3' defaultValue={'delhi'}>
                <option value="delhi">
                    delhi
                </option>
                <option value="gurgaon">
                    gurgaon
                </option>
                <option value="noida">
                    noida
                </option>
                <option value="rajasthan">
                    rajasthan
                </option>
            </select>

            <h5 className='bg-blue-400 p-5 h-15 rounded-2xl w-max'> this is your selected city : {city}</h5>

        </div>
    )
}

export default Radio