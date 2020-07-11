import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Home from './Home';
import Jobs from './Jobs';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      name: "React",
      showHidePost: false,
      showHideFendPost: false,
      
    };
  }

  render() {
  return (
    <Router>
      <div id="main">
      <div id="navbar"> 
        <nav>
          <ul id="navul">
            <li className="navlink">
              <Link to="/">GET STARTED</Link>
            </li>
            <li className="navlink">
              <Link to="/jobs">Jobs</Link>
            </li>
          </ul>
          <div id="logo">
          <h1>CAREER MONKEY</h1>  
          <img id="logopic" src="images/logo.jpg" alt="logo" width="80" height="60" />
          </div>
        </nav>
        </div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/" exact component={Home}>
            <Home />
          </Route>
          <Route path="/jobs" exact component={Jobs}>
            <Jobs />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
}


export default App
