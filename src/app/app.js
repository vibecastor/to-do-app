import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import '../styles/main.scss';
import Dashboard from '../dashboard/dashboard';
import Landing from '../landing/landing';

export default class App extends React.Component {
  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <div>
            <header>
              <h1>
                To Do
              </h1>
              <nav>
                <ul>
                  <li><Link to="/">landing</Link></li>
                  <li><Link to="/dashboard">dashboard</Link></li>
                </ul>
              </nav>
            </header>
            <Route
              exact
              path="/"
              component={Landing} />
            <Route
              exact
              path="/dashboard"
              component={Dashboard} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
