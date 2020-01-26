import React from 'react'
import { Theme, withStyles, WithStyles } from '@material-ui/core'

const styles = (theme: Theme) => ({
    item: {
        padding: theme.spacing(2),
        color: theme.palette.text.secondary,
    },
});

interface SetProps {
}

function Set(props: SetProps & WithStyles<'item'>) {
    return (
        <div>
            W (155x5@6 on 12/2) 155lbs x 5 @ 8 [ ]
        </div >
    )
}

export default withStyles(styles)(Set)