import React from "react";
import { AppState } from "../redux/";
import { Grid, Button, Theme, withStyles, WithStyles } from "@material-ui/core";
import WorkoutSummary from "../components/WorkoutSummary";
import { RouteComponentProps, withRouter } from "react-router";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import { IWorkoutTemplates } from '../redux/modules/workoutTemplates';

const styles = (theme: Theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(1)
  },
  button: {
    marginTop: theme.spacing(2)
  },
  workout: {
    marginTop: theme.spacing(2),
    color: theme.palette.text.secondary
  },
  fab: {
    margin: 0,
    marginRight: theme.spacing(1),
    top: "auto",
    right: 20,
    bottom: 20,
    left: "auto",
    position: "fixed" as any
  }
});

export interface WorkoutListProps extends RouteComponentProps<{
}> {
  workoutTemplates: IWorkoutTemplates
}

type PropsWithStyles = WorkoutListProps &
  WithStyles<"root" | "button" | "workout" | "fab">;

// TODO: List all configured WorkoutTemplates, summarize each, and select an active workout from a template
// TODO: onClickHandler for setActiveWorkout
// TODO: setActiveWorkout converts the selected workoutTemplate to an IActiveWorkout
const WorkoutList = (props: PropsWithStyles) => {
  const { classes, workoutTemplates } = props;
  return (
    <div>
      <Grid
        container
        className={classes.root}
        direction="row"
        justify="flex-start"
        alignItems="stretch"
      >
        {/* TODO: Pull list of workout templates \
                and dynamically create WorkoutSummary boxes */}
        <Grid item xs={12} sm={6} className={classes.workout}>
          <WorkoutSummary>
            <Button component={Link} to="/workout/12345">
              Start Workout
            </Button>
          </WorkoutSummary>
        </Grid>

        <Grid item xs={12} sm={6} className={classes.workout}>
          <WorkoutSummary>
            <Button component={Link} to="/workout/12345">
              Start Workout
            </Button>
          </WorkoutSummary>
        </Grid>

        <Grid item xs={12} sm={6} className={classes.workout}>
          <WorkoutSummary>
            <Button component={Link} to="/workout/12345">
              Start Workout
            </Button>
          </WorkoutSummary>
        </Grid>

        <Grid item xs={12} sm={6} className={classes.workout}>
          <WorkoutSummary>
            <Button component={Link} to="/workout/12345">
              Start Workout
            </Button>
          </WorkoutSummary>
        </Grid>
      </Grid>
      <Fab
        color="primary"
        variant="extended"
        aria-label="create workout"
        className={classes.fab}
      >
        <AddIcon />
        Create new workout
      </Fab>
    </div>
  );
};

const mapStateToProps = (state: AppState) => ({
  workoutTemplates: state.workoutTemplates
});

export default withRouter(
  connect(mapStateToProps)(withStyles(styles)(WorkoutList))
);
