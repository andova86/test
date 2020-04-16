import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {CssBaseline} from "@material-ui/core";

import Continent from "../../components/Continent/Continent";



const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,


        marginTop: theme.spacing(1),
    },


}));

const Continents = (props) => {
    const classes = useStyles();

    const ContinentData = [

        {
            nombre: 'Europa',
            paises: [
                 {image: "/img/usa.png", texto: 'México', variant: "h5"},


            ]
        },

        {
            nombre: 'America del Norte',
            paises: [

            ]
        },

    ]


    return (


        <div className={classes.root}>
            <CssBaseline/>
            <main>

                {
                    ContinentData.map(item => (
                        <Continent titulo={item.nombre} variant="h4" paises={item.paises}/>
                    ))
                }


            </main>


        </div>

    );
}

export default Continents;
