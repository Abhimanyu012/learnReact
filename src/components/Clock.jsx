import React, { useEffect, useState } from 'react'

const Clock = () => {
    const [time, setTime] = useState(0)

    useEffect(() => {
        setInterval(() => {
            setTime(new Date().toLocaleTimeString())
        }, 1000);
    }, [])


    return (
        <div className="flex items-center justify-center h-50">
            <div className="bg-linear-to-r from-indigo-500 to-purple-500 text-white px-6 py-4 rounded-lg shadow-lg">
                <div className="text-xs uppercase tracking-wider opacity-80">Current Time</div>
                <div className="mt-1 text-2xl font-mono font-semibold">{time}</div>
            </div>
        </div>
    )
}

export default Clock