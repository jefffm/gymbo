import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline'
import { Switch, Route, HashRouter, Redirect } from "react-router-dom"

import ConfigurationPanel from './containers/ConfigurationPanel'
import './App.css';
import Workout from './containers/ActiveWorkout';
import WorkoutList from './containers/WorkoutList';
import { History } from './containers/History';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import ElevateAppBar from './components/ElevateAppBar';
import Drawer from './components/Drawer';


const theme = createMuiTheme({
  palette: {
    type: "dark",
    background: {
      default: "#000000",
      paper: "#121212",
    },
  },
});

const App: React.FC = () => {
  return (
    <div className="App">
      <MuiThemeProvider theme={theme}>

        <CssBaseline />

        <HashRouter>
          <ElevateAppBar title={() => "Gymbo"} menuButton={Drawer}>
            <div>
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
            </div>
          </ElevateAppBar>
        </HashRouter>
      </MuiThemeProvider>

    </div >
  );
}

export default App;