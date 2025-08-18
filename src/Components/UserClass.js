import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "dummy",
        Location: "dummy location",
        updated_at: "dummy date",
        avatar_url: "dummy url",
      },
    };
    //console.log("child constructor")
  }

  async componentDidMount() {
    //console.log("child component did mount");
    const data = await fetch("https://api.github.com/users/sateeshasb");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });

    console.log(json);
  }

  componentDidUpdate(){
    console.log("component Did Update");
  }

  componentWillUnmount(){
    console.log("componentWillUnmount");
  }

  render() {
    const { name, location, updated_at, avatar_url } = this.state.userInfo;

    console.log("child render");
    return (
      <div className="user-card">
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h3>{updated_at}</h3>
        <img src={avatar_url}></img>
      </div>
    );
  }
}

export default UserClass;
