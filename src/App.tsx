import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline'
import { Switch, Route, HashRouter, Redirect } from "react-router-dom"

import ConfigurationPanel from './containers/ConfigurationPanel'
import './App.css';
import Workout from './containers/ActiveWorkout';
import { WorkoutList } from './containers/WorkoutList';
import { History } from './containers/History';
import BottomNav from './components/BottomNav';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';


const theme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});

const App: React.FC = () => {
  return (
    <div className="App">
      <MuiThemeProvider theme={theme}>

        <CssBaseline />

        <HashRouter>
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

          <BottomNav />
        </HashRouter>
      </MuiThemeProvider>

    </div >
  );
}

export default App;