import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {CssBaseline} from "@material-ui/core";
import {Directions} from "@material-ui/icons";
import blue from "@material-ui/core/colors/blue";
import WhyWorkItem from "../../components/Help/WhyWorkItem";
import Continent from "../../components/Continent/Continent";


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginTop: theme.spacing(1),
        background: blue[100],
    },


}));

const WhyWorkList = (props) => {
    const classes = useStyles();
    const values = [
        {
            icon: <Directions/>,
            text: "Ofrecemos asistencia las 24 horas y los 365 días del año con exclusividad y excelencia."
        },
         {
            icon: <Directions/>,
            text: "Estamos en constante comunicación con cada uno de nuestros clientes."
        },
         {
            icon: <Directions/>,
            text: "Le proporcionamos respuesta a cada solicitud en menos de 24 horas."
        },
         {
            icon: <Directions/>,
            text: "Organizamos todo tipo de eventos."
        },
         {
            icon: <Directions/>,
            text: "Somos un equipo cuya principal misión es satisfacer las expectativas de nuestros clientes."
        },
         {
            icon: <Directions/>,
            text: "Tenemos una estrecha relación de trabajo con todos los proveedores turísticos de Cuba."
        },


]

    return (


        <div className={classes.root}>
            <CssBaseline/>
            <main>

                {
                    values.map(item => (
                        <WhyWorkItem texto={item.text} variant="h4" icono={item.icon} id={item.id}/>
                    ))

                }


            </main>


        </div>

    );
}

export default WhyWorkList;
