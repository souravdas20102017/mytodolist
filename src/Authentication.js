import React,{useEffect} from 'react';
import './auth.css'
import {Button} from '@material-ui/core';
import GTranslateIcon from '@material-ui/icons/GTranslate';
import {auth} from './firebase';
import firebase from "firebase";
import { useHistory } from "react-router-dom";
import { useStateValue } from './StateProvider';


function Authentication() {
      const history=useHistory();
      const [{user}]=useStateValue();

     useEffect(() => {
       if(user !== null)
       {
         history.push('/Mainpage');
       }
     }, [user,history]);
   const authenticate=(e)=>{
     e.preventDefault();
     var provider = new firebase.auth.GoogleAuthProvider();
      auth.signInWithPopup(provider).then(()=>{
        history.push('/Mainpage');
      }).catch(()=>{
        alert('Try again');
      });
 };
   
    return (
        <div className="body">
            <h1 className="logotxt">myTodoList</h1>
            <Button variant="outlined" className="btt" onClick={authenticate}><GTranslateIcon style={{color: 'red'}}/><h3>Sign in with google</h3></Button>
        </div>
    )
}

export default Authentication
