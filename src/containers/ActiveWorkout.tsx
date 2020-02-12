import React, { useEffect, useState } from "react";
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
import format from "format-duration";

import { IWorkoutTemplates } from "../redux/modules/workoutTemplates";
import { IExercises } from "../redux/modules/exercises";
import { IActiveWorkout, IActiveSet } from "../types";
import { setInterval } from "timers";
import { setActiveWorkout } from "../redux/actions";

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
  weightSettings: IWeightSettings;
  workoutTemplateId?: number;
  workoutTemplates: IWorkoutTemplates;
  activeWorkoutOptional: IActiveWorkout | null;
  exercises: IExercises;
  setActiveWorkout: any;
}

type PropsWithStyles = WorkoutProps & WithStyles<"root" | "button" | "workout">;

const ActiveWorkout = (props: PropsWithStyles) => {
  const {
    classes,
    history,
    workoutId,
    workoutTemplateId,
    weightSettings,
    workoutTemplates,
    exercises,
    activeWorkoutOptional,
    setActiveWorkout
  } = props;

  const createNewWorkout = () => {
    const newWorkout: IActiveWorkout = {
      workoutId: workoutId,
      startTime: new Date().toISOString(),
      workoutTemplateId: workoutTemplateId,
      workoutName: "Unnamed Workout",
      exercises: []
    };

    if (
      true
      //workoutTemplateId &&
      //workoutTemplates.hasOwnProperty(workoutTemplateId)
    ) {
      //const template = workoutTemplates[workoutTemplateId];
      const template = workoutTemplates[1];
      newWorkout.notes = template.notes;
      newWorkout.workoutName = template.workoutName;

      // Translate the template setGroups into sets for the active workout
      newWorkout.exercises = template.exercises.map(e => ({
        exerciseId: e.exerciseId,
        sets: e.setGroups.flatMap(setGroup => {
          const { sets, ...set } = setGroup;
          return [...Array(setGroup.sets)].map((_, i) => set);
        })
      }));
    }

    setActiveWorkout(newWorkout);
    return newWorkout;
  };

  // Get or create the active workout
  const activeWorkout: IActiveWorkout =
    activeWorkoutOptional != null ? activeWorkoutOptional : createNewWorkout();

  // setup the timer
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const workoutStartTime = new Date(activeWorkout.startTime);
  const timeElapsed = format(
    currentTime.valueOf() - workoutStartTime.valueOf()
  );

  // TODO use plate calculator
  const plateCalculator = new PlateCalculator({
    availablePlates: weightSettings.availablePlates
  });

  // Create the list of exercises from the current template
  const exerciseComponents = activeWorkout.exercises.map(e => {
    const { exerciseId, sets } = e;

    const exercise = exercises[exerciseId];

    return (
      <Exercise name={exercise.name}>
        <SetTable>
          {sets.map((set: IActiveSet) => (
            <Set
              setType={set.setType}
              reps={set.reps}
              weight={set.weight}
              unit={weightSettings.unit}
              rpe={set.rpe}
              result={set.result}
            />
          ))}
        </SetTable>
        <Button>Add Set</Button>
      </Exercise>
    );
  });

  return (
    <Container>
      <Grid container direction="column" justify="center" alignItems="stretch">
        <Button
          className={classes.button}
          onClick={() => history.goBack()}
          variant={"outlined"}
        >
          Back
        </Button>

        <ActiveWorkoutHeader
          title={activeWorkout.workoutName}
          timeElapsed={timeElapsed}
          updateTitle={(title: string) => {
            activeWorkout.workoutName = title;
            setActiveWorkout(activeWorkout);
          }}
        />

        <Notes
          notes={activeWorkout.notes}
          updateNotes={(notes: string) => {
            activeWorkout.notes = notes;
            setActiveWorkout(activeWorkout);
          }}
        />

        <ExerciseList>{exerciseComponents}</ExerciseList>

        <Button variant={"outlined"}>Add Exercise (TODO)</Button>

        <Button
          className={classes.button}
          onClick={() => {}}
          variant={"outlined"}
        >
          Cancel/Delete Workout
        </Button>

        <Button
          className={classes.button}
          onClick={() => {}}
          variant={"outlined"}
        >
          End Workout
        </Button>
      </Grid>
    </Container>
  );
};

const mapStateToProps = (state: AppState) => ({
  activeWorkoutOptional: state.activeWorkout,
  weightSettings: state.weightSettings,
  workoutTemplates: state.workoutTemplates,
  exercises: state.exercises
});

const mapDispatchToProps = {
  setActiveWorkout
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(withStyles(styles)(ActiveWorkout))
);
