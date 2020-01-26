import React from 'react'
import { Container, Grid, Button } from '@material-ui/core'
import { AppState } from '..';
import { connect } from 'react-redux';
import PlateCalculator from '../util/PlateCalculator';
import { withRouter, RouteComponentProps } from 'react-router'
import { IWeightSettings } from '../reducers/weightSettings';

interface WorkoutProps {
    workoutId: string
    dispatch: any
    weightSettings: IWeightSettings
}

class ActiveWorkout extends React.Component<WorkoutProps & RouteComponentProps> {
    render = (): React.ReactNode => {
        const plateCalculator = new PlateCalculator(
            {
                availablePlates: this.props.weightSettings.availablePlates,
                barWeight: this.props.weightSettings.barWeight
            }
        )

        return <Container>
            <Grid container direction="column" justify="flex-start" alignItems="flex-start" >
                <Button variant="contained" onClick={() => this.props.history.goBack()}>Back</Button>
                This is an active workout!!!!!
            </Grid>
        </Container>
    }
}

const mapStateToProps = (state: AppState) => ({
    weightSettings: state.weightSettings,
})

export default connect(mapStateToProps)(withRouter(ActiveWorkout))