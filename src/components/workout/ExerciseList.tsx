import React from 'react'
import { Theme, withStyles, WithStyles } from '@material-ui/core'

const styles = (theme: Theme) => ({
    item: {
        marginTop: theme.spacing(1),
        color: theme.palette.text.secondary,
    },
});

interface ExerciseListProps {
    children: any
}

const ExerciseList = (props: ExerciseListProps & WithStyles<'item'>) =>
    (
        <div className={props.classes.item}>
            {props.children}
        </div >
    )

export default withStyles(styles)(ExerciseList)