import React, { Component } from "react";
import About from './components/About'
import Movies from './components/Movies'
import Home from './components/Home'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";




export default class App extends Component {

  state = {
    movies:[
      {
        id:1,
        MovieName:'Harry Potter',
        MovieTime:'3.2 Hours',
        MovieType: 'Scienfic'
      }

    ]

  }

  render() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/Movies">Movies</Link>
            </li>
          </ul>

          <hr />

       
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/About">
              <About />
            </Route>
            <Route path="/Movies">
              <Movies movies={this.state.movies} />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}
