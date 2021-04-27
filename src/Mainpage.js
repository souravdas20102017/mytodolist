import React,{useState,useEffect} from 'react';
import './mainpage.css'
import {TextField,IconButton,Avatar} from '@material-ui/core';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import Itemlist from './Itemlist.js';
import {db} from './firebase'
import { useStateValue } from './StateProvider';
import firebase from "firebase";


function Mainpage() {
     const [{useremail,username,userprofile}]=useStateValue();
    const [name,setName]=useState('');
    const [task,setTask]=useState([]);
    useEffect(() => {
      if(useremail !== null)
       {db.collection(useremail).orderBy('timestamp','desc').onSnapshot((snapshot)=>{setTask(snapshot.docs.map((doc)=> ({posts: doc.data(),id: doc.id})))});
   }},[useremail]);
    
   const adding=(e)=>{
     e.preventDefault();
       if(name !== '')
    {  
       db.collection(useremail).add({
        Name: name,
       description: '',
       checkoruncheck: false,
       timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    }
    setName('');
   
   }
    return (
        <div>
           <div className="header">
              <h2 className="heading" >myTodoList</h2>
           </div>
           <div className="profile"><Avatar src={userprofile} style={{marginRight: '5px'}}/>{username}</div>
           <div className="addtolist">
            <div className="addoption"><TextField value={name} variant="outlined" placeholder="Type your activity......." onChange={(e)=>{setName(e.target.value)}}  style={{ marginLeft: '20px', backgroundColor: 'white' }} fullWidth  multiline rowsMax={2} ></TextField><IconButton>
                <AddCircleOutlineIcon type="submit" onClick={adding}color="primary" fontSize="large"/></IconButton></div>
           </div>
           <div>
               
              <div>
                 {task.map(({id,posts})=>(<Itemlist key={id} uid={id} mainname={posts.Name} description={posts.description} checking={posts.checkoruncheck}/>))}
              </div>
           </div>
        </div> 
    )
}

export default Mainpage
