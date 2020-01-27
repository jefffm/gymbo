import React from 'react'

import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import HistoryIcon from '@material-ui/icons/History';
import SettingsIcon from '@material-ui/icons/Settings';
import { Link } from 'react-router-dom';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        bottomBar: {
            top: 'auto',
            bottom: 0,
            textAlign: 'center',
            padding: theme.spacing(1),
            width: '100%',
            position: 'fixed',
        },
        toolbar: theme.mixins.toolbar as any,  // TODO: fix type hint
    }),
);

interface BottomNavProps { }

export default function BottomNav(props: BottomNavProps) {
    const classes = useStyles()

    return <div className={classes.root}>
        <div className={classes.toolbar}>
            <BottomNavigation
                showLabels
                className={classes.bottomBar}
            >
                <BottomNavigationAction
                    component={Link}
                    to="/workouts"
                    value="workouts"
                    label="Workouts"
                    icon={<FitnessCenterIcon />}
                />
                <BottomNavigationAction
                    component={Link}
                    to="/history"
                    value="history"
                    label="History"
                    icon={<HistoryIcon />}
                />
                <BottomNavigationAction
                    component={Link}
                    to="/settings"
                    value="settings"
                    label="Settings"
                    icon={<SettingsIcon />}
                />
            </BottomNavigation>
        </div>
    </div>
}