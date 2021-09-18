import React from 'react'

function Button({name,type}) {
    return (
        <div>
            <button type={type} className="py-1 px-6 bg-second border-2 border-hovercolor rounded text-base text-first
             hover:border-second hover:bg-hovercolor hover:text-second transition-all duration-200">
             {name}
            </button>
        </div>
    )
}

export default Button
