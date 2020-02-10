import React from 'react'
import TextField from '@material-ui/core/TextField';
import { Paper, Theme, withStyles, WithStyles, Checkbox } from '@material-ui/core'
import { SetType } from '../../types';
import { IWeight, WeightUnit } from '../../util/Weight';


const styles = (theme: Theme) => ({
    row: {
        padding: '2px 2px',
        display: 'flex',
        alignItems: 'center',
        width: 300,
    },
    input: {
        flex: 1,
        width: 25
    },
    divider: {
        height: 28,
        margin: 4,
    },
});

interface SetProps {
    setType: SetType,
    reps: number,
    unit: WeightUnit,
    weight?: IWeight,
    rpe?: number,
    done: boolean  // TODO: change done boolean to "result" enum
}

function Set(props: SetProps & WithStyles<'row' | 'input' | 'divider'>) {
    const { classes, setType, weight, reps, rpe, done } = props;
    return (
        <Paper component="form" className={classes.row}>
            <TextField
                className={classes.input}
                id="setType"
                select
                value={setType}
                variant="outlined"
                size="small"
            >
            </TextField>

            <TextField
                className={classes.input}
                defaultValue={weight}
                variant="outlined"
                size="small"
            />

            {"x"}

            <TextField
                className={classes.input}
                defaultValue={reps}
                variant="outlined"
                size="small"
            />

            {"@"}

            <TextField
                className={classes.input}
                defaultValue={rpe}
                variant="outlined"
                size="small"
            />

            <Checkbox
                checked={done}
                onChange={() => { console.log("marking set as done") }}
            />
        </Paper >
    )
}

export default withStyles(styles)(Set)