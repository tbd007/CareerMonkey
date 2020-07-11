import React from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";



class Home extends React.Component {

   

render(){
    const closeye = () => {
        document.getElementById("animcon").style.backgroundImage="url(https://raw.githubusercontent.com/naaficodes/Monkey-Login/master/images/monkey_pwd.gif)";
        document.getElementById("hands").style.marginTop="0%";
    }
    const openeye = ()=>{
        document.getElementById("animcon").style.backgroundImage="url(https://raw.githubusercontent.com/naaficodes/Monkey-Login/master/images/monkey.gif)";
        document.getElementById("hands").style.marginTop="110%";
    }
    return(
        <div className="maincontainer">
            <div className="monkeylogin">
                <div className="animcon" id="animcon">
                <img alt="hands" id="hands" src="https://raw.githubusercontent.com/naaficodes/Monkey-Login/master/images/hands.png"/>
	        </div>

	        <div className="formcon">
                <form>
                <input type="email" id="mail" name="" onClick={openeye} class="tb" placeholder="Email" autocomplete="off"/>
                <br/>
                <br/>
                <input type="password" id="pwdbar" onClick={closeye} name="pwd" class="tb"placeholder="Password" />
                <br/>
                <br/>
                <div style={{display:"flex", flexDirection:"column"}}>
                <div id="signup">
                <Link to="/jobs" className="login-btn">L O G I N</Link>
                </div>
                <div>
                <p id="pwreset">Forgot Password?</p>
                </div>
                </div>
                
                
                </form>
	        </div>
            </div>
        </div>
            )
}
}


export default Home