import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {CssBaseline} from "@material-ui/core";


import Grid from "@material-ui/core/Grid";

import Typography from "@material-ui/core/Typography";
import ImageTittle from "../../components/ImageTittle/ImageTittle";
import GalleryImages from "../../components/Gallery/GalleryImages";

import Container from "@material-ui/core/Container";

import {Link} from "react-router-dom";
import {ChevronRight} from "@material-ui/icons";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        paddingTop: '64px',
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
    const [desc, setDesc] = useState(props.location.state.item.desc);


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
                    <Grid item
                          xs={12}
                          md={10}>
                        <Container maxWidth={"xl"}>
                            <ImageTittle image={props.location.state.item.banner_image}
                                         texto={""}
                                         back={''}
                                         opacity={''}/>


                            <Typography variant={"body1"}>


                                <div dangerouslySetInnerHTML={{__html: desc}}></div>

                            </Typography>
                        </Container>


                    </Grid>

                    <Grid item
                          xs={12}
                          md={10}
                          justify={"center"}
                          container
                          style={{padding: '20px'}}>

                        <Link to={"/inscription"}
                              style={{textDecoration: 'none'}}>

                            <Button color={'primary'}
                                    variant={"contained"}
                                    endIcon={<ChevronRight/>}>Registrarse</Button>


                        </Link>
                    </Grid>

                    <Grid item
                         xs={12}
                          md={10}
                          justify={"center"}

                          container

                    >
                        <Container maxWidth={"md"}> <GalleryImages imagenes={props.location.state.item.get_images} /></Container>


                    </Grid>


                </Grid>
            </main>


        </div>

    );
}

export default Base;
