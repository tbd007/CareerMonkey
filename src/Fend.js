import React from 'react';
import './App.css';
import fend from './frontendjobs';



class FendPost extends React.Component {
    constructor() {
        super();
        this.state = {
          name: "React"
        };
      }

  render(){
        return(
            <div className="postwrapper">
               {fend.map(post =>
                 <div id="post">

                    <div id="postimg">
                        <img src={post.logo} alt="companylogo"/>
                    </div>

                    <div id="desc">
                            <div style={{display:"flex", justifyContent:"space-between"}}>
                                <h4>{post.company}</h4><div style={{display:"flex", justifyContent:"space-between"}}>
                                    {post.new? <button className="new-btn">NEW</button> : null}
                                    {post.featured? <button className="hot-btn">HOT</button> : null}
                            </div>
                            </div>
                            <h3>{post.position}</h3>
                       
                        <div id="desc-sub">
                            <p>{post.postedAt}</p>
                            <p>|</p>
                            <p>{post.level}</p>
                            <p>|</p>
                            <p>{post.contract}</p>
                            <p>|</p>
                            <p>{post.location}</p>
                            <p>|</p>
                            <p>{post.salary}</p>
                        </div>
                    </div>

                    <div id="skills">
                        {post.languages.map(lang =>
                            <button>{lang}</button>)}
                            
                        {post.tools.map(skill =>
                            <button>{skill}</button>)}    
                    </div>

                </div>
                 )}
            </div>
           
        )
    }
}


export default FendPost