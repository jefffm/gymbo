import React from 'react'
import { Theme, withStyles, WithStyles, Box } from '@material-ui/core'

const styles = (theme: Theme) => ({
    item: {
        marginTop: theme.spacing(1),
        color: theme.palette.text.secondary,
    },
});

interface ExerciseProps {
    name: string
    children: React.ReactElement[]
}

function Exercise(props: ExerciseProps & WithStyles<'item'>) {
    return (
        <div className={props.classes.item}>
            <Box border={1} borderRadius={16}>
                Exercise: {props.name}
                {props.children}
            </Box>
        </div >
    )
}

export default withStyles(styles)(Exercise)