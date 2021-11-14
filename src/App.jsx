import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.scss';

import Theme from './components/kit/theme/Theme';
import RouterWrapper from './utils/RouterWrapper';

import LayoutMain from './components/layouts/main/LayoutMain';

import Home from './pages/home/Home';
import NotFound from './pages/errors/notFound/NotFound';

const App = () => (
  <div className="App">
    <BrowserRouter>
      <Theme>
        <Switch>
          <RouterWrapper exact path="/" layout={LayoutMain}><Home /></RouterWrapper>
          <Route><NotFound /></Route>
        </Switch>
      </Theme>
    </BrowserRouter>
  </div>
);

export default App;
