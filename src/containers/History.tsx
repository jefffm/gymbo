import React, { Component } from 'react'
import { Paper, Grid } from '@material-ui/core';
import { connect } from 'react-redux';
import { AppState } from '../redux/';

interface HistoryProps {
}

export class History extends Component<HistoryProps> {
    render() {
        return <div>
            <Grid container direction="row" justify="flex-start" alignItems="stretch">
                <Grid item sm={6}>
                    <Paper>
                        HISTORY OF WORKOUT LIST
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

export default connect(mapStateToProps)(History)