import React from "react";
import {
  Container,
  Grid,
  Button,
  WithStyles,
  withStyles,
  Theme
} from "@material-ui/core";
import { AppState } from "../redux";
import { connect } from "react-redux";
import PlateCalculator from "../util/PlateCalculator";
import { withRouter, RouteComponentProps } from "react-router";
import { IWeightSettings } from "../redux/modules/weightSettings";
import ActiveWorkoutHeader from "../components/workout/ActiveWorkoutHeader";
import Notes from "../components/workout/Notes";
import SetTable from "../components/workout/SetTable";
import Set from "../components/workout/Set";
import ExerciseList from "../components/workout/ExerciseList";
import Exercise from "../components/workout/Exercise";

import { IWorkoutTemplates } from "../redux/modules/workoutTemplates";
import { IExercises } from "../redux/modules/exercises";
import { ISetGroupTemplateBase } from "../types";
import { WeightUnit } from "../util/Weight";

const styles = (theme: Theme) => ({
  root: {
    flexGrow: 1
  },
  button: {
    marginTop: theme.spacing(1)
  },
  workout: {
    marginTop: theme.spacing(2),
    color: theme.palette.text.secondary
  }
});

interface WorkoutProps extends RouteComponentProps<{}> {
  workoutId: number;
  dispatch: any;
  weightSettings: IWeightSettings;
  workoutTemplates: IWorkoutTemplates;
  exercises: IExercises;
}

type PropsWithStyles = WorkoutProps & WithStyles<"root" | "button" | "workout">;

// TODO: ElevateAppBar with back button
// TODO: Timer

const ActiveWorkout = (props: PropsWithStyles) => {
  const {
    classes,
    dispatch,
    history,
    workoutId,
    weightSettings,
    workoutTemplates,
    exercises
  } = props;

  // TODO: use a separate type for ActiveWorkout, not a workoutTemplate
  const activeWorkout = workoutTemplates[workoutId];

  // TODO use plate calculator
  const plateCalculator = new PlateCalculator({
    availablePlates: weightSettings.availablePlates
  });

  const exerciseComponents = activeWorkout.exercises.map(
    exerciseTemplate => {
      const exercise = exercises[exerciseTemplate.exerciseId]

      return (
        <Exercise name={exercise.name}>
          <SetTable unit={"lbs"}>
            {exerciseTemplate.setGroups.flatMap((setGroup: ISetGroupTemplateBase) =>
              [...Array(setGroup.sets)].map((_, i) => {
                return <Set
                  key={exercise.id + i}
                  setType={setGroup.setType}
                  reps={setGroup.reps}
                  weight={setGroup.weight}
                  unit={weightSettings.unit}
                  rpe={setGroup.rpe}
                  done={true}
                />
              })
            )}
          </SetTable>
          <Button>Add Set</Button>
        </Exercise>
      )
    }
  );

  return (
    <Container>
      <Grid container direction="column" justify="center" alignItems="stretch">
        <Button className={classes.button} onClick={() => history.goBack()}>
          Back
        </Button>

        <Grid item>
          <ActiveWorkoutHeader
            title={activeWorkout.workoutName}
            timeElapsed={"00:35:12"}
          />
        </Grid>

        <Grid item>
          <Notes notes={activeWorkout.notes} />
        </Grid>

        <Grid item>
          <ExerciseList>
            {exerciseComponents}
            <Button>Add Exercise</Button>
          </ExerciseList>
        </Grid>

        <Button
          className={classes.button}
          onClick={() => console.log("Cancelling workout " + workoutId)}
        >
          Cancel Workout
        </Button>
      </Grid>
    </Container>
  );
};

const mapStateToProps = (state: AppState) => ({
  weightSettings: state.weightSettings,
  workoutTemplates: state.workoutTemplates,
  exercises: state.exercises
});

export default withRouter(
  connect(mapStateToProps)(withStyles(styles)(ActiveWorkout))
);
