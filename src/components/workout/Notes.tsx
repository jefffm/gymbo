import React from 'react'
import { Theme, withStyles, WithStyles } from '@material-ui/core'

const styles = (theme: Theme) => ({
    item: {
        padding: theme.spacing(2),
        color: theme.palette.text.secondary,
    },
});

interface NotesProps {
}

function Notes(props: NotesProps & WithStyles<'item'>) {
    return (
        <div className={props.classes.item}>
            notes
        </div >
    )
}

export default withStyles(styles)(Notes)