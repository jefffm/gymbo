import React from "react";
import {
  Theme,
  withStyles,
  WithStyles,
  Box,
  IconButton,
  Grid,
  Typography
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

const styles = (theme: Theme) => ({
  title: {
    color: theme.palette.text.primary
  },
  item: {
    marginTop: theme.spacing(1),
    color: theme.palette.text.secondary
  },
  iconButton: {
    padding: 10
  }
});

interface ExerciseProps {
  name: string;
  children: React.ReactElement | React.ReactElement[];
}

function Exercise(
  props: ExerciseProps & WithStyles<"title" | "item" | "iconButton">
) {
  return (
    <div className={props.classes.item}>
      <Box border={1} borderRadius={16}>
        <Grid container>
          <Grid item xs={11}>
            <Typography className={props.classes.title}>
              {props.name}
            </Typography>
          </Grid>
          <Grid item xs={1}>
            <IconButton className={props.classes.iconButton} aria-label="menu">
              <MenuIcon />
            </IconButton>
          </Grid>
          <Grid item xs={12}>
            {props.children}
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default withStyles(styles)(Exercise);
