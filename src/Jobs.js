import React from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Link,
    Switch,
    Route
  } from "react-router-dom";

import Listing from './Listing';



  class Jobs extends React.Component {
    
    
    
      render(){
        
          return(
            <div>
            <div className="header">
                <img id="profpic" src="images/john.jpg" height="60" width="70" alt="profilepicture"/>
                <h2>John The Developer</h2>
                <button style={{marginLeft:8, marginTop:5, padding:3, fontSize:"0.7em", fontWeight:"bolder"}}>EDIT</button>
                
                <div id="signout">
                    <Link id="signoutlink" to="/">Sign Out</Link>
                </div>
            </div>
           
            <div id="list" className="listings">

              <Listing />
            </div>
            </div>
          )
      }
  }

  export default Jobs