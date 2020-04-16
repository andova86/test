import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";
import lightGreen from "@material-ui/core/colors/lightGreen";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginTop: theme.spacing(3),

      padding: theme.spacing(5),
      border: '1px',
      background: theme.palette.background.paper,

    },

    block: {
       display: 'flex',
      justifyContent: 'center',


    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

export default function Footer() {
    const classes = useStyles();

    return (

        <div className={classes.root}>
            <CssBaseline/>
            <Grid container justify={"center"}>
                <Grid item xs={12}   justify={"center"} container>
                  <Divider />

                    <Typography variant={"caption"} >
                        Todos los derechos reservados ® Enjoy Cuba Holdings
                    </Typography>


                </Grid>
            </Grid>
        </div>


    );
}
