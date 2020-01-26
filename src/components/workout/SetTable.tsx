import React from 'react'
import { Theme, withStyles, WithStyles, Box } from '@material-ui/core'

const styles = (theme: Theme) => ({
    item: {
        padding: theme.spacing(2),
        color: theme.palette.text.secondary,
    },
});

interface SetTableProps {
    children: React.ReactElement[]
}

function SetTable(props: SetTableProps & WithStyles<'item'>) {
    return (
        <div>
            <Box border={1}>
                setTable
            {props.children}
            </Box>
        </div >
    )
}

export default withStyles(styles)(SetTable)