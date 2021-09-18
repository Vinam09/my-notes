import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice'
import { firebase, db } from '../firebase.js';

function Input() {
    
    const user = useSelector(selectUser);

    const [title,setTitle] = useState("");
    const[text,setText]= useState("")



    const sendPost = e => {
        e.preventDefault();

        const userId = db.collection('users').doc(user.uid)
        userId.collection('notes').add({
            
                title: title,
                text: text,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
              
        }).then(()=>{
            setTitle("");
            setText("");
        })  
    };

    return (
        <section>
        
            <div className="pt-24  sm:mx-8 xm:mx-32 xl:mx-96">
                <form className="flex flex-col items-start bg-white relative rounded">
                    <input value={title} onChange ={e => setTitle(e.target.value)} 
                    className="mb-1 w-full rounded-sm py-2 px-4 text-first  focus:border-hovercolor focus:outline-none font-body font-bold" type="text"
                    placeholder="Title"/>

                    <textarea value={text} onChange ={e => setText(e.target.value)} 
                    className="resize-y mb-3 w-full py-2 px-4 text-first focus:border-hovercolor focus:outline-none font-body" type="text"
                    placeholder="Take a note..."/>

                    <button onClick={sendPost}
                    className="bg-third rounded-full py-1 px-3 text-second sm:text-xl xm:text-2xl
                      hover:bg-hovercolor transition-all duration-200 absolute right-4 top-24 mb-2">+</button>
                </form>
                <hr className="bg-hovercolor h-1 rounded mt-8 w-full"/>
            </div>
                
        </section>
    )
}

export default Input
