import React from 'react'


function Note({title,text}) {


    return (
        <div>
             <div className="note bg-white rounded p-4 mb-6 xm:mr-6 xm:w-80 xm:max-w-xs w-full">
                 <h1 className="font-bold text-first font-sans mb-1 text-lg" >{title}</h1>
                 <p className="font-body text-first ">{text}</p>
             </div>
        </div>
    )
}

export default Note
