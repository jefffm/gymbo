import React, { Component } from 'react'

import { Paper, Grid } from '@material-ui/core';
import { AppState } from '../index';
import { IWeightSettings } from '../reducers/WeightSettings';
import { connect } from 'react-redux';

interface BackupProps {
    dispatch: any
}

export class BackupPanel extends Component<BackupProps> {
    render() {
        return <div>
            <Grid container direction="row" justify="flex-start" alignItems="stretch">
                <Grid item sm={6}>
                    <Paper>
                        Backup options
                    </Paper>
                </Grid>

                <Grid item sm={6}>
                    <Paper>
                        Backups
                    </Paper>
                </Grid>
            </Grid>
        </div>
    }
}

const mapStateToProps = (state: AppState) => ({
    weightSettings: state.weightSettings,
})

export default connect(mapStateToProps)(BackupPanel)
