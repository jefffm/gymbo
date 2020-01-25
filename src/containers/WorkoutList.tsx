import React, { Component } from 'react'
import { AppState } from '../App.test';
import { Paper, Grid } from '@material-ui/core';
import { connect } from 'react-redux';

interface WorkoutListProps {
}

export class WorkoutList extends Component<WorkoutListProps> {
    render() {
        return <div>
            <Grid container direction="row" justify="flex-start" alignItems="stretch">
                <Grid item sm={6}>
                    <Paper>
                        WORKOUT LIST
                    </Paper>
                </Grid>

                <Grid item sm={6}>
                    <Paper>
                        LISTING WORKOUTS
                    </Paper>
                </Grid>
            </Grid>
        </div>
    }
}

const mapStateToProps = (state: AppState) => ({
})

export default connect(mapStateToProps)(WorkoutList)