import React from 'react'
import makeStyles from "@material-ui/core/styles/makeStyles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";

import BannerPrincipal from "../components/Banner/BannerPrincipal";

import BannerW from "../components/Banner/BannerW";
import Continents from "../containers/Continents/Continents";


const Home = (props) => {


    const useStyles = makeStyles((theme) => ({
        root: {
            flexGrow: 1,
            paddingTop: 56,
        },
        control: {
            padding: theme.spacing(2),
        },
    }));


    const classes = useStyles();


    return (

        <React.Fragment>


            <div className={classes.root}>
                <CssBaseline/>
                <Grid container justify={"center"}>
                    <Grid item xs={12} md={10}>

                        <BannerPrincipal/>

                    </Grid>

                    <Grid item xs={12} md={10} container justify={"flex-start"}>
                         <Typography variant={"body1"} className={classes.control}>
                            “Enjoy Travel Holding” (ETH) es una marca que pertenece al Grupo Skedio. Con más de 20 años
                            de experiencia en el turismo internacional, sólida representación mundial y con una
                            tecnología avanzada, nos especializamos en los servicios B2B (Business to Business) con los
                            mejores profesionales locales en cada destino que representamos. La misión de ETH es de
                            convertir las necesidades del cliente en sueños alcanzables y personalizados. En esencia,
                            somos tu B2B de viajes a medida por el mundo. ETH es el aliado ideal para las agencias de
                            viajes que deseen acceso y conocimiento exclusivo de todos los destinos globales. Con ETH
                            las agencias de viajes encontrarán autenticidad, variedad en experiencias de viajes,
                            asistencia 24 horas, precios competitivos, y muchos otros beneficios que solo nuestro
                            dedicado equipo de profesionales les puede ofrecer. Con un solo click vivirás la experiencia
                            de “Enjoy Travel Holding”, te enseñaremos lo fabuloso que es trabajar con nosotros. Te
                            esperamos…
                        </Typography>
                    </Grid>

                    <Grid item xs={12}>

                        <BannerW/>
                    </Grid>
                    <Grid item item xs={12} md={10}>
                        <Container maxWidth={"xl"}>
                            <Continents/>
                        </Container>

                    </Grid>


                </Grid>

            </div>

        </React.Fragment>

    )
}

export default Home