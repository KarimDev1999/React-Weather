import React from 'react';
import './app.css';
// components
import { Header, WeatherInfo, Info } from './components/';
// components
import { HashRouter, Switch, Route } from 'react-router-dom';

import Container from '@material-ui/core/Container';


const App = () => {
  return (
    <HashRouter>
      <div className="App">
        <Header />
        <Container>
          <Switch>
            <Route exact path='/' component={WeatherInfo} />
            <Route exact path='/info' component={Info} />
          </Switch>
        </Container>
      </div>
    </HashRouter>
  );
}

export default App;
