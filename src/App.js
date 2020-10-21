import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
  useRouteMatch,
  useParams,
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
            <li><Link to="/topics">Topics</Link></li>
          </ul>
        </nav>

        {/*
          A <Switch> looks through all its children <Route> elements and renders the first
          one whose path matches the current URL. Use a <Switch> any time you have multiple
          routes, but you want only one of them to render at a time
        */}
        <Switch>
          <Route path="/about"><About /></Route>
          <Route path="/topics"><Topics /></Route>
          <Route path="/"><Home /></Route>
        </Switch>
      </div>
    </Router>
  );
}

const Home = () => (<h2>Home</h2>);
const About = () => (<h2>About</h2>);
const Topics = () => {
  let match = useRouteMatch();
  console.log('match >>> ', match);

  return (
    <div>
      <h2>Topics</h2>

      <ul>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>
            Props v. State
          </Link>
        </li>
      </ul>

      {/* The Topics page has its own <Switch> with more routes
          that build on the /topics URL path. You can think of the
          2nd <Route> here as an "index" page for all topics, or
          the page that is shown when no topic is selected */}
      <Switch>
        <Route path={`${match.path}/:topicId`}>
          <Topic />
        </Route>
        <Route path={match.path}>
          <h3>Please select a topic.</h3>
        </Route>
      </Switch>
    </div>
  );
};

function Topic() {
  console.log('useParams() >>> ', useParams());
  let { topicId } = useParams();
  return <h3>Requested topic ID: {topicId}</h3>;
}