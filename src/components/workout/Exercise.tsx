import React from 'react'
import { Theme, withStyles, WithStyles, Box } from '@material-ui/core'

const styles = (theme: Theme) => ({
    item: {
        padding: theme.spacing(2),
        color: theme.palette.text.secondary,
    },
});

interface ExerciseProps {
    name: string
    children?: React.ReactElement
}

function Exercise(props: ExerciseProps & WithStyles<'item'>) {
    return (
        <div>
            <Box border={1}>
                Exercise: {props.name}
                {props.children}
            </Box>
        </div >
    )
}

export default withStyles(styles)(Exercise)