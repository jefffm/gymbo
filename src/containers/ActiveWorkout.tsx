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
//import PlateCalculator from "../util/PlateCalculator";
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
import { nullableId, IWorkout, ISet, WorkoutState } from "../types";
import { setInterval } from "timers";
import { setActiveWorkoutId, addWorkouts } from "../redux/actions";
import { IWorkouts } from "../redux/modules/workouts";
import { typestate } from "typestate";

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
  activeWorkoutId: nullableId;
  exercises: IExercises;
  workouts: IWorkouts;
  setActiveWorkoutId(activeWorkoutId: nullableId): {};
  addWorkouts(...workouts: IWorkout[]): {};
}

type PropsWithStyles = WorkoutProps & WithStyles<"root" | "button" | "workout">;

/**
 * Manage the state of the selected workout
 *
 * Workouts can be created, started, or completed.
 *
 * Currently this just manages the timer.
 *
 * @param workout the currently selected workout
 */
const createStateMachine = (workout: IWorkout) => {
  var fsm = new typestate.FiniteStateMachine<WorkoutState>(workout.state);

  fsm.from(WorkoutState.CREATED).to(WorkoutState.STARTED);
  fsm.from(WorkoutState.STARTED).to(WorkoutState.COMPLETED);

  fsm.on(WorkoutState.STARTED, (from?: WorkoutState) => {
    // TODO: start the timer and make the elapsed time visible
    workout.startTime = new Date().toISOString();
  });
  fsm.on(WorkoutState.COMPLETED, (from?: WorkoutState) => {
    // TODO: stop the timer
    // TODO: display start and end time + date + duration
    workout.endTime = new Date().toISOString();
  });

  return fsm;
};

const getTimeElapsed = (workout: IWorkout, currentTime: Date): string =>
  workout.startTime
    ? (function() {
        const startTime: string = workout.startTime;
        const workoutStartTime = new Date(startTime);
        return format(currentTime.valueOf() - workoutStartTime.valueOf());
      })()
    : "";

const ActiveWorkout = (props: PropsWithStyles) => {
  const {
    classes,
    history,
    workoutId,
    workoutTemplateId,
    weightSettings,
    workoutTemplates,
    workouts,
    exercises,
    activeWorkoutId,
    addWorkouts,
    setActiveWorkoutId
  } = props;

  // TODO: Rework this whole thing to remove the use of the "ActiveWorkout" types and use a logged workout instead.
  // A workout is unstarted if it has no start time (so, don't show the timer)
  // A workout is "active" if it has a start time and no end time
  // A global "activeworkout" id can be used to ensure there's only one active
  // A workout is "complete" if it has an end time
  const createNewWorkout = () => {
    console.log("creating new workout with id " + workoutId);
    const newWorkout: IWorkout = {
      id: workoutId,
      state: WorkoutState.CREATED,
      workoutTemplateId: workoutTemplateId,
      name: "Unnamed Workout",
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
      newWorkout.name = template.workoutName;

      // Translate the template setGroups into sets for the active workout
      newWorkout.exercises = template.exercises.map((e, exerciseNum) => ({
        exerciseId: e.exerciseId,
        sets: e.setGroups.flatMap(setGroup => {
          const { numSets, ...set } = setGroup;
          return [...Array(numSets)].map(
            (_, i): ISet => ({ id: exerciseNum + ":" + i, ...set })
          );
        })
      }));
    }

    addWorkouts(newWorkout);
    setActiveWorkoutId(newWorkout.id);
    return newWorkout;
  };

  // Get or create the active workout
  const activeWorkout =
    activeWorkoutId && workouts.hasOwnProperty(activeWorkoutId)
      ? workouts[activeWorkoutId]
      : createNewWorkout();

  // TODO: move the timer state into the Active Workout selector. The Active Workout item will need to be more than just an optional ID.
  // setup the timer
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const timeElapsed = getTimeElapsed(activeWorkout, currentTime);
  const fsm = createStateMachine(activeWorkout);

  // TODO use plate calculator
  // const plateCalculator = new PlateCalculator({
  //   availablePlates: weightSettings.availablePlates
  // });

  // Create the list of exercises from the current template
  const exerciseComponents = activeWorkout.exercises?.map(
    (e, exerciseIndex) => {
      const { exerciseId, sets } = e;

      const exercise = exercises[exerciseId];

      return (
        <Exercise name={exercise.name}>
          <SetTable>
            {sets.map((set: ISet, setIndex: number) => (
              <Set
                unit={weightSettings.unit}
                set={set}
                updateSet={(set: ISet) => {
                  if (activeWorkout.exercises) {
                    activeWorkout!.exercises[exerciseIndex].sets[
                      setIndex
                    ] = set;
                    addWorkouts(activeWorkout);
                  }
                }}
              />
            ))}
          </SetTable>
          <Button>Add Set</Button>
        </Exercise>
      );
    }
  );

  // TODO: add title and add notes update the whole workout. Should this be more fine-grained?

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
          title={activeWorkout.name ? activeWorkout.name : ""}
          timeElapsed={timeElapsed}
          updateTitle={(title: string) => {
            activeWorkout.name = title;
            addWorkouts(activeWorkout);
          }}
        />

        <Notes
          notes={activeWorkout.notes}
          updateNotes={(notes: string) => {
            activeWorkout.notes = notes;
            addWorkouts(activeWorkout);
          }}
        />

        <Button
          hidden={fsm.is(WorkoutState.CREATED)}
          className={classes.button}
          variant={"outlined"}
          onClick={() => {
            if (fsm.canGo(WorkoutState.STARTED)) {
              fsm.go(WorkoutState.STARTED);
            }
          }}
        >
          Start Workout
        </Button>

        <ExerciseList>{exerciseComponents}</ExerciseList>

        <Button
          className={classes.button}
          variant={"outlined"}
          onClick={() => {}}
        >
          Add Exercise (TODO)
        </Button>

        <Button
          className={classes.button}
          variant={"outlined"}
          onClick={() => {
            // prompt for confirmation
            // delete the state and redirect to workouts
          }}
        >
          Cancel/Delete Workout
        </Button>

        <Button
          hidden={!fsm.is(WorkoutState.STARTED)}
          className={classes.button}
          variant={"outlined"}
          onClick={() => {
            if (fsm.canGo(WorkoutState.COMPLETED)) {
              fsm.go(WorkoutState.COMPLETED);
            }
          }}
        >
          Finish Workout
        </Button>
      </Grid>
    </Container>
  );
};

const mapStateToProps = (state: AppState) => ({
  activeWorkoutId: state.activeWorkoutId,
  weightSettings: state.weightSettings,
  workoutTemplates: state.workoutTemplates,
  workouts: state.workouts,
  exercises: state.exercises
});

const mapDispatchToProps = {
  addWorkouts,
  setActiveWorkoutId
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(withStyles(styles)(ActiveWorkout))
);
