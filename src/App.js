import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li>
              <NavLink
                to="/about"
                activeStyle={{
                  fontWeight: "bold",
                  color: "red"
                }}
              >
                About
              </NavLink>
            </li>
            <li><Link to={{pathname: "/users"}}>Users</Link></li>
          </ul>
        </nav>

        {/*
          A <Switch> looks through all its children <Route> elements and renders the first
          one whose path matches the current URL. Use a <Switch> any time you have multiple
          routes, but you want only one of them to render at a time
        */}
        <Switch>
          <Route path="/about"><About /></Route>
          <Route path="/users"><Users /></Route>
          <Route path="/"><Home /></Route>
        </Switch>
      </div>
    </Router>
  );
}

const Home = () => (<h2>Home</h2>);
const About = () => (<h2>About</h2>);
const Users = () => (<h2>Users</h2>);