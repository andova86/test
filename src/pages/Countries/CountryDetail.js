import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {CssBaseline} from "@material-ui/core";


import Grid from "@material-ui/core/Grid";

import Typography from "@material-ui/core/Typography";
import ImageTittle from "../../components/ImageTittle/ImageTittle";
import GalleryImages from "../../components/Gallery/GalleryImages";
import BlueButton from "../../components/Buttons/BlueButton";

import Container from "@material-ui/core/Container";

import {Link} from "react-router-dom";
import {ChevronRight} from "@material-ui/icons";


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginTop: theme.spacing(5),
    },

    texto: {
        color: theme.palette.primary.dark,
        paddingTop: '10px',
    },

    bloque: {
        display: 'flex',
        justifyContent: 'center',

    }


}));


const Base = (props) => {
    const classes = useStyles();


    return (


        <div className={classes.root}>
            <CssBaseline/>
            <main>

                <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                >
                    <Grid item xs={12} md={10}>
                        <Container maxWidth={"xl"}>
                            <ImageTittle image={"/img/banner_home.jpg"} texto={""} back={''} opacity={''}/>


                            <Typography variant={"body1"}>
                                Canadá es un inmenso país rodeado de atractivos, desde hermosos paisajes naturales hasta
                                cosmopolitas ciudades. Antigua colonia francesa y británica, este pais tiene una rica
                                herencia cultural e historica. Desde recorrer por las calles adoquinadas del Viejo
                                Quebec, rodeado de iglesias de piedra y monumentos históricos hasta un paseo por el
                                legendario Toronto, apreciando la bella arquitetura victoriana. Los visitantes tambien
                                se sienten muy atraídos por visitar las increíbles Cataratas del Niágara. La fauna de
                                Canadá es tan variada como los paisajes, ya sea en el mar o volando en el cielo, podemos
                                descubrir increibles animales autoctonos de este bello y gran pais.
                            </Typography>
                        </Container>


                    </Grid>

                    <Grid item xs={12} md={10} justify={"center"} container style={{padding: '20px'}}>

                        <Link to={"/inscription"} style={{textDecoration: 'none'}}>
                            <BlueButton name={"Registrarse"} icon={<ChevronRight/>}/>
                        </Link>
                    </Grid>

                    <Grid item xs={12} md={10}>

                        <Container maxWidth={"xl"}>
                            <GalleryImages/>
                        </Container>


                    </Grid>

                </Grid>
            </main>


        </div>

    );
}

export default Base;
