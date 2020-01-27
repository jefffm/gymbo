import React from 'react'
import TextField from '@material-ui/core/TextField';
import { Theme, withStyles, WithStyles, Grid, FormControlLabel, FormGroup, Checkbox, TableRow, TableCell } from '@material-ui/core'

const styles = (theme: Theme) => ({
    row: {
       padding: theme.spacing(1),
       color: theme.palette.text.secondary,
    },
});

interface SetProps {
    setType: string,  // TODO: use an enum for SetType
    prevSet: string,
    weight: number,
    reps: number,
    rpe: number,
    done: boolean
}

function Set(props: SetProps & WithStyles<'row'>) {
    return (
        <TableRow className={props.classes.row}>
            <TableCell> {props.setType} </TableCell>
            <TableCell> {props.prevSet} </TableCell>
            <TableCell align="center"> {props.weight} </TableCell>
            <TableCell align="center"> {"x"} </TableCell>
            <TableCell align="center"> {props.reps} </TableCell>
            <TableCell align="center"> {"@"} </TableCell>
            <TableCell align="center"> {props.rpe} </TableCell>

            <TableCell>
              <Checkbox
                  checked={props.done}
                  onChange={() => { console.log("marking set as done") }}
              />
            </TableCell>
        </TableRow>
    )
}

export default withStyles(styles)(Set)