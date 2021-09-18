import React from 'react'

import { useSelector, useDispatch } from 'react-redux';
import {auth} from '../firebase';
import {logout, selectUser} from "../features/userSlice";

function Header() {



    const dispatch = useDispatch();

    const logoutApp = () => {
        dispatch(logout());
        auth.signOut();
    }

    return (
        <div className ="bg-third px-8 py-4 flex flex-row justify-between fixed top-0 left-0 right-0 z-50 ">
            <h1 className ="text-second font-sans text-3xl"><span className ="text-hovercolor">MY</span>NOTES</h1>
            
                <button className="py-1 px-6 bg-second border-2 border-hovercolor rounded text-base text-first
                hover:border-second hover:bg-hovercolor hover:text-second transition-all duration-200" onClick={logoutApp}>
                Sign Out
                </button>
            
            
        </div>
    )
}

export default Header
