import React from 'react'
import { Container, Grid, Button, WithStyles, withStyles, Theme } from '@material-ui/core'
import { AppState } from '..';
import { connect } from 'react-redux';
import PlateCalculator from '../util/PlateCalculator';
import { withRouter, RouteComponentProps } from 'react-router'
import { IWeightSettings } from '../reducers/weightSettings'
import ActiveWorkoutHeader from '../components/workout/ActiveWorkoutHeader'
import Notes from '../components/workout/Notes'
import SetTable from '../components/workout/SetTable';
import Set from '../components/workout/Set';
import ExerciseList from '../components/workout/ExerciseList';
import Exercise from '../components/workout/Exercise';

const styles = (theme: Theme) => ({
    root: {
        flexGrow: 1,
    },
    button: {
        padding: theme.spacing(1)
    },
    workout: {
        padding: theme.spacing(2),
        color: theme.palette.text.secondary,
    },
});


interface WorkoutProps extends RouteComponentProps<{}> {
    workoutId: string
    dispatch: any
    weightSettings: IWeightSettings
}

type PropsWithStyles = WorkoutProps & WithStyles<'root' | 'button' | 'workout'>

// TODO: ElevateAppBar with back button
// TODO: Timer

const ActiveWorkout = (props: PropsWithStyles) => {
    const plateCalculator = new PlateCalculator(
        {
            availablePlates: props.weightSettings.availablePlates,
            barWeight: props.weightSettings.barWeight
        }
    )

    return <Container>
        <Grid container
            direction="column"
            justify="center"
            alignItems="stretch" >

            <Button
                className={props.classes.button}
                onClick={() => props.history.goBack()}>
                Back
            </Button>

            <Grid item>
                <ActiveWorkoutHeader
                    title={"Workout Name"}
                    timeElapsed={"00:35:12"}
                />
            </Grid>

            <Grid item>
                <Notes
                    notes={"These are some workout notes"}
                />
            </Grid>

            <Grid item>
                <ExerciseList>
                    <Exercise name="squats">
                        <SetTable>
                            <Set />
                            <Set />
                            <Set />
                        </SetTable>
                        <Button>Add Set</Button>
                    </Exercise>
                    <Button>Add Exercise</Button>
                </ExerciseList>
            </Grid>

            <Button
                className={props.classes.button}
                onClick={() => console.log("Cancelling workout " + props.workoutId)}>
                Cancel Workout
            </Button>
        </Grid>
    </Container>
}

const mapStateToProps = (state: AppState) => ({
    weightSettings: state.weightSettings,
})

export default withRouter(
    connect(mapStateToProps)(
        withStyles(styles)(ActiveWorkout)
    )
)