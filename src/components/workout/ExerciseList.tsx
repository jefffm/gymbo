import React from 'react'
import { Grid, Box, Card, Theme, withStyles, WithStyles, CardContent, CardActions, Button, CardHeader, Typography } from '@material-ui/core'

const styles = (theme: Theme) => ({
    item: {
        padding: theme.spacing(0),
        color: theme.palette.text.secondary,
    },
});

interface ExerciseListProps {
    children: React.ReactElement[] | React.ReactElement
}

function ExerciseList(props: ExerciseListProps & WithStyles<'item'>) {
    return (
        <div className={props.classes.item}>
            <Box border={1} borderRadius={16}>
                exercise list
            {props.children}
            </Box>
        </div >
    )
}

export default withStyles(styles)(ExerciseList)