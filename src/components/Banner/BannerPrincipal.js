import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from "@material-ui/core/Typography";
import {CssBaseline} from "@material-ui/core";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import {ThemeProvider} from "@material-ui/styles";
import ImageTittle from "../ImageTittle/ImageTittle";


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        background: '#161616',
        color: 'white',
         marginTop: theme.spacing(2),
    },


     }));

const BannerPrincipal = (props) => {
    const classes = useStyles();

const theme = createMuiTheme();

theme.typography.h3 = {
  fontSize: '1.2rem',
  '@media (min-width:600px)': {
    fontSize: '1.5rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '2.5rem',
  },
};
    return (


        <ThemeProvider theme={theme}>
        <div className={classes.root}>
               <CssBaseline />
            <main>

               <ImageTittle image={'/img/banner_home.jpg'} texto = "SUEÑOS A TU MEDIDA" variant="h4" back={'rgba(0,0,0,0.1)'} />
            </main>


        </div>
        </ThemeProvider>

    );
}

export default BannerPrincipal;
