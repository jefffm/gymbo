import React from 'react'
import { Grid, Box, Card, Theme, withStyles, WithStyles, CardContent, CardActions, Button, CardHeader, Typography } from '@material-ui/core'

const styles = (theme: Theme) => ({
    item: {
        padding: theme.spacing(2),
        color: theme.palette.text.secondary,
    },
});

interface WorkoutSummaryProps {
    children?: React.ReactElement
}

function WorkoutSummary(props: WorkoutSummaryProps & WithStyles<'item'>) {
    return (
        <div>
            <Box border={1} className={props.classes.item}>
                <Card>
                    <Typography variant="h6">
                        Placeholder Workout
                    </Typography>
                    <CardContent>
                        <Grid
                            container
                            direction="column"
                            justify="flex-start"
                            alignItems="stretch">
                            <Grid item> Squat 4x4 @ 8 </Grid>
                            <Grid item> Bench 3x10 @ 7 </Grid>
                            <Grid item> DB Row 3x15 @ 7 </Grid>
                        </Grid>
                    </CardContent>
                    <CardActions>
                        {props.children}
                    </CardActions>
                </Card>
            </Box>
        </div >
    )
}

export default withStyles(styles)(WorkoutSummary)