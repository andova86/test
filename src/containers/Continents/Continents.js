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
    const [continentes, setContinentes] = React.useState([])


    React.useEffect(() => {
        ObtenerDatos()
    }, [])



    var myHeaders = new Headers();
    //myHeaders.append("Authorization", "Token 3efc646241ba43129f5b2bd5d5b6d05f631b3cb0");
     myHeaders.append("Authorization", "Token b6bb35a2aac8e8da5fc5e55a6964a9f23d89d7e5");

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    const ObtenerDatos = async () => {
        const data = await fetch("http://127.0.0.1:8000/api/continents/", requestOptions)
        //const data = await fetch("https://enjoytravelholding.com/api/continents/", requestOptions)
        const conts = await data.json()
        setContinentes(conts)

    }


    return (


        <div className={classes.root}>
            <CssBaseline/>
            <main>



               {
                      continentes.map(item => (
                          <Continent  titulo={item.name} variant="h4" key={item.id} paises={item.destiny}/>
                      ))
                }


            </main>


        </div>

    );
}

export default Continents;
