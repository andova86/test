import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";
import {CssBaseline} from "@material-ui/core";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import {ThemeProvider} from "@material-ui/styles";




const Country = (props) => {


    const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    img: {
        maxWidth: '100%',
        height: 'auto',
        width: '100%',
         '&:hover ': {
                opacity: props.opacity ,


            },

    },

    block: {
        position: 'relative',
        width: '100%',
    },

    texto: {
        width: '100% !important',
        padding: "10px",
        position: 'absolute',
        bottom: 5,
        left: '0',
        background: props.back,
        color: 'white',
        display: 'flex',
        justifyContent: 'center',



    },



}));
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

    /* function Titulo(props) {
            const existT = props.texto;
            if (!existT) {

                return ()
                 ;
            }
            return <span/>;
        }*/

    return (



    <ThemeProvider theme={theme}>
        <div className={classes.root}>
            <CssBaseline/>

            <div className={classes.block}>
                <img src={props.image} className={classes.img}/>

                <Typography variant={props.variant} className={classes.texto}>
                        {props.texto}
                    </Typography>

            </div>

        </div>
    </ThemeProvider>

)
    ;
}

export default Country;
