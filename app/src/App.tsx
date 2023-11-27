import { Router, Switch, Route } from 'wouter';
import { MainPage } from '@pages/Main/MainPage';
import { DataPage } from '@pages/Data/DataPage';

import './App.scss';

export function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path={'/data'}>
            <DataPage />
          </Route>
          <Route>
            <MainPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
