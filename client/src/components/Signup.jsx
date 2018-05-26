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
<div>
<form action="/signup" method="post">
    <div>
      <label for="username">Username:</label>
      <input id="username" type="text" name="username"></input>
    </div>
    <div>
      <label for="password">Password:</label>
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