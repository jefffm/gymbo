import React from 'react'
import { Theme, withStyles, WithStyles } from '@material-ui/core'

const styles = (theme: Theme) => ({
    item: {
        padding: theme.spacing(2),
        color: theme.palette.text.secondary,
    },
});

interface TimerProps {
}

function Timer(props: TimerProps & WithStyles<'item'>) {
    return (
        <div>
            timer
        </div >
    )
}

export default withStyles(styles)(Timer)