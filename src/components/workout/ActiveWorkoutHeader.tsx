import React from 'react'
import { Theme, withStyles, WithStyles } from '@material-ui/core'

const styles = (theme: Theme) => ({
    item: {
        padding: theme.spacing(2),
        color: theme.palette.text.secondary,
    },
});

interface ActiveWorkoutHeaderProps {
}

function ActiveWorkoutHeader(props: ActiveWorkoutHeaderProps & WithStyles<'item'>) {
    return (
        <div>
            header
        </div >
    )
}

export default withStyles(styles)(ActiveWorkoutHeader)