import React, { Component } from "react";
import { render } from "react-dom";
import Post from "./Post";
import FendPost from "./Fend";
import RJobs from "./RJobs";


class Listing extends Component {
  constructor() {
    super();
    this.state = {
      name: "React",
      showHidePost: true,
      showHideFendPost: false,
      showHideRJobs: false
    };
    this.hideComponent = this.hideComponent.bind(this);
  }

  hideComponent(name) {
    console.log(name);
    switch (name) {
      case "showHidePost":
        this.setState({ showHidePost: true});
        this.setState({ showHideFendPost: false });
        this.setState({ showHideRJobs: false });
        break;
      case "showHideFendPost":
        this.setState({ showHideFendPost: true });
        this.setState({ showHidePost: false});
        this.setState({ showHideRJobs: false });
        break;
      case "showHideRJobs":
        this.setState({ showHidePost: false });
        this.setState({ showHideFendPost: false });
        this.setState({ showHideRJobs: true });
      
    }
  }

  render() {
    const { showHidePost, showHideFendPost, showHideRJobs} = this.state;
    return (
      <div>
       
        
        <div className="search">
          <p>Your saved searches</p>  
          <button onClick={() => this.hideComponent("showHidePost")}>
            Web Developer
          </button>
          <button onClick={() => this.hideComponent("showHideFendPost")}>
            Front End Developer
          </button>
          <button onClick={() => this.hideComponent("showHideRJobs")}>
            React Developer
          </button>
          </div>
          <div className="listings">
          {showHidePost && <Post/>}

          {showHideFendPost && <FendPost />}

          {showHideRJobs && <RJobs />}
          </div>
        </div>
     
    );
  }
}

export default Listing