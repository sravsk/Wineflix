import React from 'react';

class Signup extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username : "",
      password: ""
    }
  }

  render() {
    return(
<div>SIGNUP
<form action="/signup" method="post">
    <div>
      <label>Username:</label>
      <input id="username" type="text" name="username"></input>
    </div>
    <div>
      <label>Password:</label>
      <input id="password" type="text" name="password"></input>
    </div>
    <div>
      <input type="submit" value="Sign up"></input>
    </div>
</form>
</div>
      )
  }
}

export default Signup;