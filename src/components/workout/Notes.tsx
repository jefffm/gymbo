import React from "react";
import { Theme, withStyles, WithStyles, TextField } from "@material-ui/core";

const styles = (theme: Theme) => ({
  item: {
    padding: theme.spacing(1),
    color: theme.palette.text.secondary
  }
});

interface NotesProps {
  notes?: string;
  updateNotes(notes: string): void;
}

function Notes(props: NotesProps & WithStyles<"item">) {
  const { classes, notes, updateNotes } = props;
  return (
    <TextField
      className={classes.item}
      onChange={event => updateNotes(event.target.value)}
      variant="outlined"
      value={notes}
      label={"Notes"}
      multiline
    />
  );
}

export default withStyles(styles)(Notes);
