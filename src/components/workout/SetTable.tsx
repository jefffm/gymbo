import React from 'react'
import { Theme, withStyles, WithStyles, Box, Table, TableCell, TableHead, TableRow } from '@material-ui/core'

const styles = (theme: Theme) => ({
    item: {
        marginTop: theme.spacing(1),
        color: theme.palette.text.secondary,
    },
    table: {
       minWidth: 350,
    }
});

interface SetTableProps {
    unit: string
    children: React.ReactElement[] | React.ReactElement
}

function SetTable(props: SetTableProps & WithStyles<'item' | 'table'>) {
    return (
        <div className={props.classes.item}>
          <Table aria-label="set table" size="small" className={props.classes.table} padding="none">
          <TableHead>
          <TableRow>
            <TableCell>Type</TableCell>
            <TableCell>Prev</TableCell>
            <TableCell>{props.unit}</TableCell>
            <TableCell></TableCell>
            <TableCell>Reps</TableCell>
            <TableCell></TableCell>
            <TableCell>RPE</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
              {props.children}
          </Table>
        </div >
    )
}

export default withStyles(styles)(SetTable)