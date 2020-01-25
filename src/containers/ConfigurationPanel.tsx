import React, { Component } from 'react'

import { Paper, Grid } from '@material-ui/core';
import { AppState } from '../index';
import { IWeightSettings } from '../reducers/weightSettings';
import { connect } from 'react-redux';

interface ConfigurationPanelProps {
    weightSettings: IWeightSettings
    dispatch: any
}

export class ConfigurationPanel extends Component<ConfigurationPanelProps> {
    render() {
        return <div>
            <Grid container direction="row" justify="flex-start" alignItems="stretch">
                <Grid item sm={6}>
                    <Paper>
                        TODO: plate availability, bar availability
                    </Paper>
                </Grid>

                <Grid item sm={6}>
                    <Paper>
                        item 2
                    </Paper>
                </Grid>
            </Grid>
        </div>
    }
}

const mapStateToProps = (state: AppState) => ({
    weightSettings: state.weightSettings,
})

export default connect(mapStateToProps)(ConfigurationPanel)