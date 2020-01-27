import React from 'react'
import { Typography, Theme, withStyles, WithStyles } from '@material-ui/core'

const styles = (theme: Theme) => ({
    item: {
        padding: theme.spacing(2),
        color: theme.palette.text.secondary,
    },
    title: {
        color: theme.palette.text.primary,
    }
});

interface ActiveWorkoutHeaderProps {
    title: string
    timeElapsed: string
}

function ActiveWorkoutHeader(props: ActiveWorkoutHeaderProps & WithStyles<'item' | 'title'>) {
    return (
        <div className={props.classes.item}>
          <Typography className={props.classes.title}>
              {props.title}
          </Typography>
          <Typography>
              {props.timeElapsed}
          </Typography>
        </div >
    )
}

export default withStyles(styles)(ActiveWorkoutHeader)