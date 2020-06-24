import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {CssBaseline} from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,


        marginTop: theme.spacing(1),
    },


}));

const Continents = (props) => {
    const classes = useStyles();
    const [continentes, setContinentes] = React.useState([])


    React.useEffect(() => {
        ObtenerDatos()
    }, [])

    const ContinentData = [

        {
            nombre: 'América del Norte',
            paises: [
                {image: "/img/canada.png", texto: 'CANADA', variant: "h5"},
                {image: "/img/usa.png", texto: 'USA', variant: "h5"},
                {image: "/img/mexico.png", texto: 'Mexico', variant: "h5"},


            ]
        },

        {
            nombre: 'Centroamérica y el Caribe',
            paises: [
                {image: "/img/costa_rica.png", texto: 'Caribe', variant: "h5"},
                {image: "/img/costa_rica.png", texto: 'COSTA RICA', variant: "h5"},
                {image: "/img/cuba.png", texto: 'CUBA', variant: "h5"},
                {image: "/img/bahamas.png", texto: 'BAHAMAS', variant: "h5"},

            ]
        },

    ]

    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer 3efc646241ba43129f5b2bd5d5b6d05f631b3cb0");

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    const ObtenerDatos = async () => {
        const data = await

            fetch("https://enjoytravelholding.com/api/continents/", requestOptions)
                .then(response => response.text())
                .then(result => console.log(result))
                .catch(error => console.log('error', error));

    }


    return (


        <div className={classes.root}>
            <CssBaseline/>
            <main>

                {
                    /*  continentes.map(item => (
                          <Continent titulo={item.nombre} variant="h4" paises={item.paises}/>
                      ))*/
                }


            </main>


        </div>

    );
}

export default Continents;
