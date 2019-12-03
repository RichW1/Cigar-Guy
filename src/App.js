import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Header from './Header';
import { AuthProvider } from './AuthContext';
import Home from './Home';
import Reviews from './Reviews';
import HorrorStories from './HorrorStories';
import QuestionsCorner from './QuestionsCorner';

function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Header />
          <div class="bg-img">
            <div class="container">
              <div class="topnav">
                <Link to='/Home'>
                  <a>Home</a>
                </Link>&nbsp;
                <Link to='/Reviews'>
                  <a>Reviews</a>
                </Link>&nbsp;
                <Link to='/HorrorStories'>
                  <a>Horror Stories</a>
                </Link>&nbsp;
                <Link to='/QuestionsCorner'>
                  <a>Questions Corner</a>
                </Link>&nbsp;
              </div>
            </div>
          </div>
          <Switch>
            <Route path='/Home'>
              <Home />
            </Route>
            <Route path="/Reviews">
              <Reviews />
            </Route>
            <Route path='/HorrorStories'>
              <HorrorStories />
            </Route>
            <Route path='/QuestionsCorner'>
              <QuestionsCorner />
            </Route>
          </Switch>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
