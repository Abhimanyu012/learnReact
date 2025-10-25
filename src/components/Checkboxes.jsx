import React, { useState } from 'react'

const Checkboxes = () => {


    const [skill, setSkill] = useState([])
    const handleSkill = (e) => {
        console.log(e.target.value, e.target.checked)
        if (e.target.checked) {
            // use functional updater to avoid stale state when multiple updates happen
            setSkill((prev) => [...prev, e.target.value])
        } else {
            setSkill(prev=>prev.filter((item) => item !== e.target.value))
        }
    }
    return (
        <div className=' p-5 h-screen w-full justify-center items-center gap-5'>
            <h1 className='text-2xl'>skills </h1>

            <div className='border-2 h-1/2 p-5 '>
                <input type="checkbox" onChange={handleSkill} id='php' className='m-2' value={"php"} checked={skill.includes('php')} />
                <label htmlFor="php">PHP</label>

                <input type="checkbox" onChange={handleSkill} id='java' className='m-2' value={"java"} checked={skill.includes('java')} />
                <label htmlFor="java">JAVA</label>

                <input type="checkbox" onChange={handleSkill} id='python' className='m-2' value={"python"} checked={skill.includes('python')} />
                <label htmlFor="python">PYTHON</label>

                <input type="checkbox" onChange={handleSkill} id='node' className='m-2' value={"node"} checked={skill.includes('node')} />
                <label htmlFor="node">NODE</label>
            </div>

            <div className='bg-amber-200 border-2 p-2'>
                {skill.length ? skill.join(', ') : 'No skills selected'}
              
            </div>

        </div>
    )
}

export default Checkboxes