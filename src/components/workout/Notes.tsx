import React from 'react'
import { Theme, withStyles, WithStyles, TextField } from '@material-ui/core'

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
            <TextField
                variant="outlined"
                value={props.notes}
                defaultValue={"Enter notes here"}
            />
        </div >
    )
}

export default withStyles(styles)(Notes)