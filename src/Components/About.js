 import User from './User'
import UserClass from './UserClass';
import { Component } from 'react';

class About extends Component {
  constructor(props){
    super(props);
    console.log("parent consttructor")
  }

  conponentdidMount(){
    console.log("parent component did mount");
  }
  render() {
    console.log("parent render")
     return (
    <div>
        <h1>About us</h1>
         
        <UserClass name={"sateesha class()"} />
        
    </div>
  )
  }
}

 

export default About;
