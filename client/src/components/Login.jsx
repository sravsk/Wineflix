import React from 'react';

class Login extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username : "",
      password: ""
    }
  }
handleClick(){
  console.log('clicked');
}
  render() {
    return(
<div>
<form action="/login" method="get">
    <div>
      <label>Username:</label>
      <input id="username" type="text" name="username"></input>
    </div>
    <div>
      <label>Password:</label>
      <input id="password" type="password" name="password"></input>
    </div>
    <div>
      <input type="submit" value="Log in"></input>
    </div>
</form>
</div>
      )
  }
}

export default Login;