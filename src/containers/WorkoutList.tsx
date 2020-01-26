import React, { Component } from 'react'
import { AppState } from '../App.test';
import { Grid, Button, Theme, withStyles, Card, WithStyles } from '@material-ui/core';
import WorkoutSummary from '../components/WorkoutSummary';
import { RouteComponentProps, withRouter } from 'react-router';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const styles = (theme: Theme) => ({
    root: {
        flexGrow: 1,
    },
    button: {
        padding: theme.spacing(5)
    },
    workout: {
        padding: theme.spacing(2),
        color: theme.palette.text.secondary,
    },
});

export interface WorkoutListProps extends RouteComponentProps<{}> {
}

type PropsWithStyles = WorkoutListProps & WithStyles<'root' | 'button' | 'workout'>

const WorkoutList = (props: PropsWithStyles) => {
    const classes = props.classes
    return <div>
        <Grid container
            className={classes.root}
            direction="row"
            justify="flex-start"
            alignItems="stretch">

            <Grid item xs={12} className={classes.button} >
                <Grid container
                    direction="row"
                    justify="center"
                    alignItems="center">
                    <Button> Create New Workout </Button>
                </Grid>
            </Grid>

            {/* TODO: Pull list of workout templates \
                and dynamically create WorkoutSummary boxes */}
            <Grid item xs={12} sm={6} className={classes.workout} >
                <WorkoutSummary>
                    <Button component={Link} to="/workout/12345">
                        Start Workout
                    </Button>
                </WorkoutSummary>
            </Grid>

            <Grid item xs={12} sm={6} className={classes.workout} >
                <WorkoutSummary>
                    <Button component={Link} to="/workout/12345">
                        Start Workout
                    </Button>
                </WorkoutSummary>
            </Grid>

            <Grid item xs={12} sm={6} className={classes.workout} >
                <WorkoutSummary>
                    <Button component={Link} to="/workout/12345">
                        Start Workout
                    </Button>
                </WorkoutSummary>
            </Grid>

            <Grid item xs={12} sm={6} className={classes.workout} >
                <WorkoutSummary>
                    <Button component={Link} to="/workout/12345">
                        Start Workout
                    </Button>
                </WorkoutSummary>
            </Grid>
        </Grid >
    </div >
}

const mapStateToProps = (state: AppState) => ({
})

export default withRouter(
    connect(mapStateToProps)(
        withStyles(styles)(WorkoutList)
    )
)