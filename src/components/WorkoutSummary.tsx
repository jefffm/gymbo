import React from 'react'
import { Grid, Card, Theme, withStyles, WithStyles, CardContent, CardActions, Typography } from '@material-ui/core'

const styles = (theme: Theme) => ({
    container: {
        padding: theme.spacing(1),
        color: theme.palette.text.secondary,
    },
    item: {
        padding: theme.spacing(1),
        color: theme.palette.text.secondary,
    },
});

interface WorkoutSummaryProps {
    children?: React.ReactElement
}

// TODO: take a "logged workout" and extract the best set from each

function WorkoutSummary(props: WorkoutSummaryProps & WithStyles<'container' | 'item'>) {
    return (
        <div>
            <Card className={props.classes.container}>
                <Typography variant="h6">
                    Placeholder Workout
                    </Typography>
                <CardContent>
                    <Grid
                        container
                        direction="column"
                        justify="flex-start"
                        alignItems="stretch">
                        <Grid item className={props.classes.item}> Squat 4x4 @ 8 </Grid>
                        <Grid item className={props.classes.item}> Bench 3x10 @ 7 </Grid>
                        <Grid item className={props.classes.item}> DB Row 3x15 @ 7 </Grid>
                    </Grid>
                </CardContent>
                <CardActions>
                    {props.children}
                </CardActions>
            </Card>
        </div >
    )
}

export default withStyles(styles)(WorkoutSummary)