import React from 'react'
import { Theme, withStyles, WithStyles } from '@material-ui/core'

const styles = (theme: Theme) => ({
    item: {
        padding: theme.spacing(2),
        color: theme.palette.text.secondary,
    },
});

interface ActiveWorkoutHeaderProps {
    title: string
    timeElapsed: string
}

function ActiveWorkoutHeader(props: ActiveWorkoutHeaderProps & WithStyles<'item'>) {
    return (
        <div className={props.classes.item}>
            {props.title}
            {props.timeElapsed}
        </div >
    )
}

export default withStyles(styles)(ActiveWorkoutHeader)