import React,{useEffect} from 'react';
import Mainpage from './Mainpage.js';
import Authentication from './Authentication.js';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import{auth} from './firebase.js';
import { useStateValue } from './StateProvider.js';


function App() {
     const [{},dispatch]=useStateValue();

       useEffect(() => {
          auth.onAuthStateChanged((authUser)=>{
              if(authUser)
              {
                dispatch({
                  type: 'Auth',
                  users: authUser,
                  email: authUser.email,
                  name: authUser.displayName,
                  profile: authUser.photoURL

                });
              }
              else{
                dispatch({
                  type: 'delAuth',
                  users: null
                });
              }

        });
         
       },[]);
  return (
    <Router>
     <div className="App">
       <Switch>
        <Route path="/Mainpage">
          <Mainpage/>
         </Route>
         <Route path="/">
           <Authentication/>
          </Route>
      </Switch>
     </div>
    </Router>
  );
}

export default App;
