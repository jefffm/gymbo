import React from 'react'
import TextField from '@material-ui/core/TextField';
import { Paper, Theme, withStyles, WithStyles, Grid, MenuItem, FormControlLabel, FormGroup, Checkbox, TableRow, TableCell, IconButton, InputAdornment } from '@material-ui/core'



const styles = (theme: Theme) => ({
    row: {
        padding: '2px 2px',
        display: 'flex',
        alignItems: 'center',
        width: 400,
    },
    input: {
        flex: 1,
        width: 50
    },
    divider: {
        height: 28,
        margin: 4,
    },
});

// TODO: move setTypes elsewhere
const setTypes = [
    {
        value: 'Normal',
        label: '',
    },
    {
        value: 'W',
        label: 'Warmup',
    },
    {
        value: 'D',
        label: 'Drop set',
    },
    {
        value: 'F',
        label: 'Failed set',
    },
];

interface SetProps {
    setType: string,  // TODO: use an enum for SetType
    unit: string,
    weight: number,
    reps: number,
    rpe: number,
    done: boolean
}

function Set(props: SetProps & WithStyles<'row' | 'input' | 'divider'>) {
    return (
        <Paper component="form" className={props.classes.row}>


            <TextField
                className={props.classes.input}
                id="outlined-select-currency"
                select
                value={props.setType}
                variant="outlined"
                size="small"
            >
                {setTypes.map(option => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.value}
                    </MenuItem>
                ))}

            </TextField>

            <TextField
                className={props.classes.input}
                defaultValue={props.weight}
                variant="outlined"
                size="small"
            />

            {"x"}

            <TextField
                className={props.classes.input}
                defaultValue={props.reps}
                variant="outlined"
                size="small"
            />

            {"@"}

            <TextField
                className={props.classes.input}
                defaultValue={props.rpe}
                variant="outlined"
                size="small"
            />

            <Checkbox
                checked={props.done}
                onChange={() => { console.log("marking set as done") }}
            />
        </Paper >
    )
}

export default withStyles(styles)(Set)