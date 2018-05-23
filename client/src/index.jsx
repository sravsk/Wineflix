import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Content from './components/Content.jsx';
import Wines from './components/Wines.jsx';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import css from './styles/style.css';



class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <div className="header"><Header/></div>
          <Router>
            <Switch>
              <Route path="/" exact={true} component={Content}/>
              <Route path="/wines" exact={true} component={Wines}/>
           </Switch>
          </Router>
          <div className="footer"><Footer/></div>
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));