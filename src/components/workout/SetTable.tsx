import React from 'react'
import { Theme, withStyles, WithStyles, Box, Table } from '@material-ui/core'

const styles = (theme: Theme) => ({
    item: {
        padding: theme.spacing(0),
        color: theme.palette.text.secondary,
    },
 table: {
       minWidth: 350,
    }
});

interface SetTableProps {
    children: React.ReactElement[] | React.ReactElement
}

function SetTable(props: SetTableProps & WithStyles<'item' | 'table'>) {
    return (
        <div className={props.classes.item}>
          <Table aria-label="set table" size="small" className={props.classes.table} padding="none">
              {props.children}
          </Table>
        </div >
    )
}

export default withStyles(styles)(SetTable)