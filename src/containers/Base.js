import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {CssBaseline} from "@material-ui/core";



const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
         marginTop: theme.spacing(1),
    },


}));

const Base = (props) => {
    const classes = useStyles();


    return (



        <div className={classes.root}>
               <CssBaseline />
            <main>


            </main>


        </div>

    );
}

export default Base;
