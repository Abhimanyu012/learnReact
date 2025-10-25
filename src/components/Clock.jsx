import React, { useEffect, useState } from 'react'

const Clock = () => {
    const [time, setTime] = useState(()=>new Date().toLocaleTimeString())

    useEffect(() => {
        const id = setInterval(() => {
            setTime(new Date().toLocaleTimeString())
        }, 1000);

        return()=>clearInterval(id)
    }, [])


    const now = new Date()
    const seconds = now.getSeconds()
    const minutes = now.getMinutes() + seconds / 60
    const hours = (now.getHours() % 12) + minutes / 60

    const secDeg = seconds * 6
    const minDeg = minutes * 6
    const hourDeg = hours * 30

    const handStyle = (deg, width, height, color) => ({
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: `translate(-50%,-100%) rotate(${deg}deg)`,
        transformOrigin: '50% 100%',
        width,
        height,
        background: color,
        borderRadius: 4,
    })

    return (
        <div className="flex items-center justify-center h-screen">
            <div className="w-64 h-64 rounded-full bg-linear-to-tr from-indigo-600 to-pink-500 p-4 flex items-center justify-center shadow-2xl">
                <div className="relative w-full h-full rounded-full bg-white/5 backdrop-blur-sm flex items-center justify-center">
                    {/* analog hands */}
                    <div style={handStyle(hourDeg, '6px', '22%', 'rgba(255,255,255,0.95)')} />
                    <div style={handStyle(minDeg, '4px', '30%', 'rgba(255,255,255,0.9)')} />
                    <div style={handStyle(secDeg, '2px', '38%', '#ffd166')} />

                    {/* center cap */}
                    <div
                        className="absolute bg-white rounded-full"
                        style={{ width: 10, height: 10, top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }}
                    />

                    {/* hour markers */}
                    {Array.from({ length: 12 }).map((_, i) => {
                        const angle = i * 30
                        return (
                            <div
                                key={i}
                                style={{
                                    position: 'absolute',
                                    top: '8%',
                                    left: '50%',
                                    transform: `rotate(${angle}deg) translateY(-2%) translateX(-50%)`,
                                    width: i % 3 === 0 ? '4px' : '2px',
                                    height: i % 3 === 0 ? '10px' : '6px',
                                    background: 'rgba(255,255,255,0.9)',
                                    borderRadius: 2,
                                }}
                            />
                        )
                    })}

                    {/* digital readout */}
                    <div className="absolute bottom-6 text-white text-sm font-mono bg-white/10 px-3 py-1 rounded-full">
                        {time}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Clock