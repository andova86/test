import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {CssBaseline} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import WhatsAppIcon from "@material-ui/core/SvgIcon/SvgIcon";
import DialogContent from "@material-ui/core/DialogContent/DialogContent";



const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,

    },


}));

const ContactPanelItem = (props) => {
    const classes = useStyles();


    return (



        <div className={classes.root}>
               <CssBaseline />
            <main>
                  <Typography gutterBottom variant={'h5'} className={classes.subtitle}>
                        Por Whatsapp
                    </Typography>

                     <Grid container className={classes.linea}>

                        <Grid item xs={3} borderRight={1}>
                            <WhatsAppIcon fontSize={"large"} color={"white"}/>
                        </Grid>

                        <Grid item xs={9}>

                            <Typography gutterBottom variant={"h6"} color={"initial"}>
                       <a href={"https://api.whatsapp.com/send?phone=34608682668"} className={classes.ref}> +34 608 682 668</a>
                    </Typography>

                        </Grid>

                    </Grid>
            </main>


        </div>

    );
}

export default ContactPanelItem;
