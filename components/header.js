import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Head from 'next/head';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

export default function Header({ title="My Page" }) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Head>
                <title>{title}</title>
            </Head>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        OpenRank
                    </Typography>
                    <Button color="inherit">Login</Button>
                    <Button color="inherit">SignUp</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}