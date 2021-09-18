import React,{useState} from 'react'
import { useDispatch } from 'react-redux';
import {auth} from '../firebase';
import {login} from "../features/userSlice";

function Login() {

    const [email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const[name, setName] = useState("");

    const dispatch = useDispatch();


    const register = () => {
        if(!name){
            return alert("Please enter a name!")
        }

        auth.createUserWithEmailAndPassword(email,password)
        .then((userAuth) => {
            userAuth.user.updateProfile({
                displayName: name,
            })
            .then(() => {
                dispatch(login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: name,
                }))
            })
        }).catch(error => alert(error));
    };
    
    const loginApp = (e) => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(email,password)
        .then(userAuth => {
            dispatch(login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: userAuth.user.displayName,

            }))
        }).catch(error => alert(error));
    };

    return (
        <div className = "bg-third rounded xm:w-1/2 lg:w-1/3 sm:w-11/12 m-auto">
            <div>
            <div className = "flex flex-col py-12 xm:my-48 sm:my-8 sm:mx-8 xm:mx-16">
                <h1 className ="text-second font-sans text-4xl text-center mb-4"><span className ="text-hovercolor">MY</span>NOTES</h1>
                <input className = "p-2 bg-second rounded text-first mb-2 focus:outline-none" value={name} onChange={e => setName(e.target.value)}
                type="text" placeholder="Name (Only required for Sign Up)" />

                <input className = "p-2 bg-second rounded text-first mb-2 focus:outline-none" value={email} onChange ={e => setEmail(e.target.value)}
                type="email" placeholder="Email" />

                <input className = "p-2 bg-second rounded text-first mb-2 focus:outline-none" value={password} onChange ={e => setPassword(e.target.value)}
                 type="password" placeholder="Password" />

                 <button className="bg-hovercolor rounded p-2 mb-2 text-second font-sans hover:bg-second hover:text-hovercolor" 
                type="submit" onClick ={loginApp}>Sign In</button>

                <button className="bg-hovercolor rounded p-2 text-second font-sans hover:bg-second hover:text-hovercolor" 
                type="submit" onClick ={register}>Sign Up</button>

                
                </div>
            </div>
        </div>
    )
}

export default Login

