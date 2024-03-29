import React from 'react'
import { Theme, withStyles, WithStyles, FormControl, FormGroup, Container } from '@material-ui/core'

const styles = (theme: Theme) => ({
    item: {
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
            <Container>
                <FormControl component="fieldset">
                    <FormGroup>
                        {props.children}
                    </FormGroup>
                </FormControl>
            </Container>
        </div>
    )
}

export default withStyles(styles)(SetTable)