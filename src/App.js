import React,{useEffect} from 'react';
import {login,logout,selectUser} from "./features/userSlice";
import {useDispatch, useSelector} from "react-redux";
import {auth} from './firebase';

import './index.css';
import Header from './components/Header';
import Input from './components/Input';
import Login from './components/Login';
import Attribute from './components/Attribute';
import NotesRender from './components/NotesRender';

function App() {

  const user = useSelector(selectUser);
  const dispatch = useDispatch();


  useEffect(() => {
    auth.onAuthStateChanged((userAuth => {
      if(userAuth){
        //User Logged in
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
        }));
      }else{
        //User Logged out
        dispatch(logout());
      }
    }));
    
  }, []);


  return (
    <div className="App">


      {!user ? <Login /> : (
        <div>
           <Header/>
           <Input />
           <NotesRender />      
        </div>
      )}
     
        <Attribute />
    </div>
    
    
  );
}

export default App;
