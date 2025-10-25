import { useState } from "react";

const colorClasses = {
    zinc: 'bg-zinc-500',
    blue: 'bg-blue-500',
    yellow: 'bg-yellow-400',
    pink: 'bg-pink-500',
    cyan: 'bg-cyan-500',
    magenta: 'bg-fuchsia-500',
    red: 'bg-red-500',
};

export const Button = ({ color, onClick, active = false }) => {
    const bgClass = colorClasses[color] ?? 'bg-gray-500';

    // visual classes for active vs inactive
    const activeClasses = active
        ? 'ring-4 ring-offset-2 ring-white/30 scale-105'
        : 'hover:scale-105';

    return (
        <div>
            <button
                type="button"
                aria-label={`Set background to ${color}`}
                className={`relative shadow-2xl text-lg rounded-2xl p-5 w-40 ${bgClass} outline-none transition-transform duration-200 ${activeClasses}`}
                onClick={() => {
                    // log the semantic color key, then call the parent's setter once
                    console.log('clicked', color);
                    onClick(color);
                }}
            >
                {/* show a check icon when active */}
                {active && (
                    <span className="absolute top-2 right-2 text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                    </span>
                )}

                <span className="capitalize">{color}</span>
            </button>
        </div>
    );
};

const BgChanger = () => {
    // default background key (semantic)
    const [bg, setBg] = useState('red');

    // resolve the Tailwind class from the color key (fallback to a safe class)
    const containerBgClass = colorClasses[bg] ?? 'bg-red-300';

    return (
        <div className={`relative flex flex-col justify-end items-center h-screen w-full gap-2 pb-20 transition-colors duration-500 ease-in-out ${containerBgClass}`}>
            {/* top label showing the currently selected color */}
            <div className="absolute top-6 left-1/2 transform -translate-x-1/2 flex items-center gap-3 bg-black/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <span className={`${containerBgClass} inline-block w-6 h-6 rounded-full border border-white/30`} />
                <span className="text-white text-xl font-semibold capitalize">{bg}</span>
            </div>

            <div className="flex justify-center items-end gap-6 pb-6">
                <Button color="zinc" onClick={setBg} active={bg === 'zinc'} />
                <Button color="blue" onClick={setBg} active={bg === 'blue'} />
                <Button color="yellow" onClick={setBg} active={bg === 'yellow'} />
                <Button color="pink" onClick={setBg} active={bg === 'pink'} />
                <Button color="cyan" onClick={setBg} active={bg === 'cyan'} />
                <Button color="magenta" onClick={setBg} active={bg === 'magenta'} />
                <Button color="red" onClick={setBg} active={bg === 'red'} />
            </div>
        </div>
    );
};

export default BgChanger;