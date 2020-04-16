import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from "@material-ui/core/Typography";
import {CssBaseline} from "@material-ui/core";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import {ThemeProvider} from "@material-ui/styles";
import ImageTittle from "../ImageTittle/ImageTittle";
import {Link} from "react-router-dom";


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,

        marginTop: theme.spacing(2),
    },

    titulo: {
        color: '#0064AE',

    },


}));

const Continent = (props) => {
    const classes = useStyles();
    const [paises, setPaises] = useState(props.paises)
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
                <CssBaseline/>
                <main>

                    <Grid container justify={"flex-start"} spacing={2}>
                        <Grid item xs={12}>
                            <Typography variant={props.variant} color="textSecondary" className={[classes.titulo]}>
                                {props.titulo}
                            </Typography>
                        </Grid>


                        {
                            paises.map(item => (
                                <Grid item md={3} xs={12} sm={6}>

                                    <Link to={`/${item.texto}/detalle`}>
                                        <ImageTittle image={item.image} texto={item.texto} variant={item.variant} back={'rgba(0,0,0,0.4)' } opacity={'.5'} />
                                    </Link>
                                </Grid>
                            ))
                        }


                    </Grid>

                </main>


            </div>
        </ThemeProvider>

    );
}

export default Continent;
