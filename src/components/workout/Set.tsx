import React from 'react'
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
    weight: string, // TODO: use a weightObject for kg/lbs
    reps: number,
    rpe: number,
    done: boolean
}
/**
            <TableCell align="left">
                {props.setType}
            </TableCell>
*/

function Set(props: SetProps & WithStyles<'row'>) {
    return (
        <TableRow className={props.classes.row}>
            <TableCell size="small">
                {props.prevSet}
            </TableCell>

            <TableCell align="right">
              {props.weight}
            </TableCell>

            <TableCell align="right">
              {"x"}
            </TableCell>

            <TableCell align="right">
              {props.reps}
            </TableCell>

            <TableCell align="right">
              {"@"}
            </TableCell>

            <TableCell align="right">
              {props.rpe}
            </TableCell>

            <TableCell align="right">
              <Checkbox
                  checked={props.done}
                  onChange={() => { console.log("marking set as done") }}
              />
            </TableCell>
        </TableRow>
    )
}

export default withStyles(styles)(Set)