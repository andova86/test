import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {CssBaseline} from "@material-ui/core";
import CenteredGrid from "../../layout/Footer";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import WhyWorkList from "../../containers/WhyWorkItemList/WhyWorkList";
import TextField from "@material-ui/core/TextField";
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        paddingTop: "88px",
    },

    bloque: {
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(3),
    },


}));

const Base = (props) => {
    const classes = useStyles();


    return (


        <div className={classes.root}>
            <CssBaseline/>
            <main>
                <Grid container justify={"center"}>
                    <Grid item xs={12} md={8} container>
                        <Grid item xs={12} md={8} container alignItems={"flex-start"} className={classes.bloque}
                              direction={"column"}>
                            <Typography variant={"h4"} color={"secondary"}>
                                Creando su Cuenta de Agencia
                            </Typography>

                            <Grid item md={6} xs={12}>

                                <form className={classes.root} noValidate autoComplete="off">
                                    <TextField id="standard-basic" label="Standard" required={true}

                                     validators={['required', 'isEmail']}
                                    />
                                    <TextField id="filled-basic" label="Filled" variant="filled"/>
                                    <TextField id="outlined-basic" label="Outlined" variant="outlined"/>
                                </form>
                            </Grid>


                        </Grid>

                        <Grid item xs={12} md={4} container justify={"center"} className={classes.bloque}
                              direction={"column"}>

                            <WhyWorkList/>


                        </Grid>
                    </Grid>
                </Grid>

            </main>


        </div>

    );
}

export default Base;
