import React from "react";
import TextField from "@material-ui/core/TextField";
import {
  Paper,
  Theme,
  withStyles,
  WithStyles,
  Checkbox
} from "@material-ui/core";
import { SetResult, ISet } from "../../types";
import { WeightUnit } from "../../util/Weight";

const styles = (theme: Theme) => ({
  row: {
    padding: "2px 2px",
    display: "flex",
    alignItems: "center",
    width: 300
  },
  input: {
    flex: 1,
    width: 25
  },
  divider: {
    height: 28,
    margin: 4
  }
});

interface SetProps {
  unit: WeightUnit;
  set: ISet;
}

function Set(props: SetProps & WithStyles<"row" | "input" | "divider">) {
  const { classes, set } = props;
  const { id, setType, weight, reps, rpe, result } = set;

  return (
    <Paper key={id} component="form" className={classes.row}>
      <TextField
        key={id + ":0"}
        className={classes.input}
        value={setType}
        variant="outlined"
        size="small"
      ></TextField>

      <TextField
        key={id + ":1"}
        className={classes.input}
        defaultValue={weight}
        variant="outlined"
        size="small"
      />

      {"x"}

      <TextField
        key={id + ":2"}
        className={classes.input}
        defaultValue={reps}
        variant="outlined"
        size="small"
      />

      {"@"}

      <TextField
        key={id + ":3"}
        className={classes.input}
        defaultValue={rpe}
        variant="outlined"
        size="small"
      />

      <Checkbox
        key={id + ":4"}
        checked={result === SetResult.DONE}
        onChange={() => {
          console.log("marking set as done");
        }}
      />
    </Paper>
  );
}

export default withStyles(styles)(Set);
