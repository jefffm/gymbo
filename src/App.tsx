import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline'
import { Switch, Route, HashRouter, Redirect } from "react-router-dom"

import ConfigurationPanel from './containers/ConfigurationPanel'
import './App.css';
import Workout from './containers/ActiveWorkout';


const App: React.FC = () => {
  return (
    <div className="App">
      <HashRouter>
        <CssBaseline />
        <Switch>

          <Route path="/config" component={ConfigurationPanel} />
          <Route
            path="/workout/:workoutId"
            render={(props) => <Workout workoutId={props.match.params.workoutId} />}
          />

          <Route path="/">
            <Redirect to="/program" />
          </Route>

        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;