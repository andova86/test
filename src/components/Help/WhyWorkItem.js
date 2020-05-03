import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {CssBaseline} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";



const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
         marginTop: theme.spacing(1),
    },
    lista: {
        listStyle:"none",
        display: "flex",
        alignItems: "center",
        paddingRight: "20px",


    },
    lista_item: {
        paddingRight: "10px",
    }




}));

const WhyWorkItem = (props) => {
    const classes = useStyles();


    return (



        <div className={classes.root}>
               <CssBaseline />
            <main>
               <ul className={classes.lista} key={props.id}>
                   <li className={classes.lista_item}>{props.icono}</li>
                   <li>
                       <Typography variant={"caption"}>
                           {props.texto}
                       </Typography>

                   </li>
               </ul>

            </main>


        </div>

    );
}

export default WhyWorkItem;
