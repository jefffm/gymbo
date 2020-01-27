import React from 'react'
import { Theme, withStyles, WithStyles } from '@material-ui/core'

const styles = (theme: Theme) => ({
    item: {
        padding: theme.spacing(1),
        color: theme.palette.text.secondary,
    },
});

interface NotesProps {
    notes: string
}

function Notes(props: NotesProps & WithStyles<'item'>) {
    return (
        <div className={props.classes.item}>
            {props.notes}
        </div >
    )
}

export default withStyles(styles)(Notes)