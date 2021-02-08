import React from "react";
import '../style/App.css';
import CoinsList from './CoinList';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Favorite from './Favorite';
import Pdf from './Pdf';
import Nav from './Nav';

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route path='/' exact component={CoinsList} />
          <Route path='/pdf' component={Pdf} />
          <Route path='/favorite' component={Favorite} />
        </Switch>
      </div>
    </Router>

  );
}

export default App;