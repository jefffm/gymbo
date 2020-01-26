import React from 'react'
import { Grid, Box, Card, Theme, withStyles, WithStyles, CardContent, CardActions, Button, CardHeader, Typography } from '@material-ui/core'

const styles = (theme: Theme) => ({
    item: {
        padding: theme.spacing(2),
        color: theme.palette.text.secondary,
    },
});

interface WorkoutSummaryProps { }

function WorkoutSummary(props: WorkoutSummaryProps & WithStyles<'item'>) {
    console.log(props.classes)
    return (
        <div>
            <Box border={1} className={props.classes.item}>
                <Card>
                    <Typography variant="h6">
                        Workout Title
                        </Typography>
                    <CardContent>
                        <Grid
                            container
                            direction="column"
                            justify="flex-start"
                            alignItems="stretch">
                            <Grid item> testing1 </Grid>
                            <Grid item> testing2 </Grid>
                            <Grid item> testing3 </Grid>
                            <Grid item> testing4 </Grid>
                        </Grid>
                    </CardContent>
                    <CardActions>
                        <Button >Start Workout</Button>
                    </CardActions>
                </Card>
            </Box>
        </div >
    )
}

export default withStyles(styles)(WorkoutSummary)