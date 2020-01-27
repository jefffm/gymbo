import React from 'react'
import { Container, Grid, Button } from '@material-ui/core'
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

interface WorkoutProps {
    workoutId: string
    dispatch: any
    weightSettings: IWeightSettings
}

// TODO: ElevateAppBar with back button
// TODO: Timer

class ActiveWorkout extends React.Component<WorkoutProps & RouteComponentProps> {
    render = (): React.ReactNode => {
        const plateCalculator = new PlateCalculator(
            {
                availablePlates: this.props.weightSettings.availablePlates,
                barWeight: this.props.weightSettings.barWeight
            }
        )

        return <Container>
            <Grid container direction="column" justify="center" alignItems="stretch" >
                <Button variant="contained" onClick={() => this.props.history.goBack()}>Back</Button>

                <Grid item>
                    <ActiveWorkoutHeader />
                </Grid>

                <Grid item>
                    <Notes />
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
            </Grid>
        </Container>
    }
}

const mapStateToProps = (state: AppState) => ({
    weightSettings: state.weightSettings,
})

export default connect(mapStateToProps)(withRouter(ActiveWorkout))