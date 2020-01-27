import React from 'react'
import { Grid, Box, Card, Theme, withStyles, WithStyles, CardContent, CardActions, Button, CardHeader, Typography } from '@material-ui/core'

const styles = (theme: Theme) => ({
    item: {
        marginTop: theme.spacing(1),
        color: theme.palette.text.secondary,
    },
});

interface ExerciseListProps {
    children: React.ReactElement[] | React.ReactElement
}

function ExerciseList(props: ExerciseListProps & WithStyles<'item'>) {
    return (
        <div className={props.classes.item}>
            {props.children}
        </div >
    )
}

export default withStyles(styles)(ExerciseList)