import React from "react";
import {
  Input,
  Typography,
  Theme,
  withStyles,
  WithStyles
} from "@material-ui/core";

const styles = (theme: Theme) => ({
  item: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary
  },
  title: {
    color: theme.palette.text.primary
  }
});

interface ActiveWorkoutHeaderProps {
  title: string;
  timeElapsed: string;
  updateTitle(title: string): void;
}

// TODO: Fix ActiveWorkoutHeader styling
function ActiveWorkoutHeader(
  props: ActiveWorkoutHeaderProps & WithStyles<"item" | "title">
) {
  const { classes, timeElapsed, title, updateTitle } = props;
  return (
    <div className={classes.item}>
      <Input
        className={classes.title}
        onChange={event => updateTitle(event.target.value)}
        value={title}
        disableUnderline={true}
      ></Input>
      <Typography>{timeElapsed}</Typography>
    </div>
  );
}

export default withStyles(styles)(ActiveWorkoutHeader);
