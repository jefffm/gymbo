import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline'
import { Switch, Route, HashRouter, Redirect } from "react-router-dom"

import ConfigurationPanel from './containers/ConfigurationPanel'
import './App.css';
import Workout from './containers/ActiveWorkout';
import { WorkoutList } from './containers/WorkoutList';
import { History } from './containers/History';
import BottomNav from './components/BottomNav';
import { Container, Grid, Paper } from '@material-ui/core';


const App: React.FC = () => {
  return (
    <div className="App">
      <CssBaseline />

      <HashRouter>
        <Paper square>

          <Switch>
            <Route path="/workouts" component={WorkoutList} />
            <Route path="/history" component={History} />
            <Route path="/settings" component={ConfigurationPanel} />
            <Route
              path="/workout/:workoutId"
              render={(props) => <Workout workoutId={props.match.params.workoutId} />}
            />

            <Route path="/">
              <Redirect to="/workouts" />
            </Route>

          </Switch>
        </Paper>


        <BottomNav />
      </HashRouter>

    </div >
  );
}

export default App;