import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import logo from '../images/logo.png'
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import PhoneInTalkIcon from '@material-ui/icons/PhoneInTalk';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import { borders } from '@material-ui/system';



import {Grid} from "@material-ui/core";

import Button from "@material-ui/core/Button";
import 'typeface-roboto';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import blue from "@material-ui/core/colors/blue";
import {Link} from "react-router-dom";
import Dialog from "@material-ui/core/Dialog";
import ContactPanel from "../components/Modal/Contactos/ContactPanel";
import DialogTitle from "@material-ui/core/DialogTitle";
import PhoneInTalkOutlinedIcon from "@material-ui/core/SvgIcon/SvgIcon";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Paper from "@material-ui/core/Paper";
import ContactPanelItem from "../components/Modal/Contactos/ContactPanelItem";
import Container from "@material-ui/core/Container";


const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        paddingTop: theme.mixins.toolbar.height,
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    appBar: {
        [theme.breakpoints.up('sm')]: {

            marginLeft: drawerWidth,
        },
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
        color: "#0064B4"
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    offset: {
        offset: theme.mixins.toolbar,
    },

    linea: {
        background: "#0064ae",
        color: "white !important" ,
        padding: 5,

    },
    subtitle: {
        color: "gray",
        paddingTop: 5,
    },

    ref: {
        color:"white",
         textDecoration: "none",


    },

    borderRight: {
        borderRight: "1px !important ",
        borderColor: "white !important",

    },


    texto: {
        color: 'blue',
    },
    capital: {
        textTransform: 'capitalize',
        fontfamily: 'roboto',
        fontSize: '16px',
        color: '#706F6F ',
        fontWeight: '400'
    },

}));

function ResponsiveDrawer(props) {

    const [open, setOpen] = React.useState(false);
    const {container} = props;
    const classes = useStyles();
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClickModal = (event) => {
        setOpen(true);
    };
    const handleCloseModal = (value) => {
        setOpen(false);

    };


    const handleClose = () => {
        setAnchorEl(null);
    };


    const drawer = (
        <div>
            <div className={classes.toolbar}/>
            <Divider/>
            <List>
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{index % 2 === 0 ? <InboxIcon/> : <MailIcon/>}</ListItemIcon>
                        <ListItemText primary={text}/>
                    </ListItem>
                ))}
            </List>
            <Divider/>
            <List>
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{index % 2 === 0 ? <InboxIcon/> : <MailIcon/>}</ListItemIcon>
                        <ListItemText primary={text}/>
                    </ListItem>
                ))}
            </List>
        </div>
    );
    const preventDefault = (event) => event.preventDefault();
    return (
        <React.Fragment>


            <CssBaseline/>
            <AppBar position="fixed" style={{backgroundColor: "white"}}>

                <Grid container justify={"center"} spacing={3}>
                    <Grid item md={10} xs={12}>
                        <Toolbar>

                            <Link to={"/"}>
                                <img src={logo} alt={"logo"}/>
                            </Link>
                            <div className={classes.root}/>

                            <Hidden smDown implementation="css">

                                <Button aria-haspopup="true" onClick={handleClickModal} className={classes.capital}>
                                    Envíanos un Mensaje
                                </Button>


                            </Hidden>

                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                edge="start"
                                onClick={handleDrawerToggle}
                                className={classes.menuButton}
                            >
                                <MenuIcon/>
                            </IconButton>


                        </Toolbar>
                    </Grid>
                </Grid>


            </AppBar>
            <div className={classes.offset}/>

            <nav className={classes.drawer} aria-label="mailbox folders">
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Hidden smUp implementation="css">
                    <Drawer
                        container={container}
                        variant="temporary"
                        anchor={theme.direction === 'rtl' ? 'left' : 'right'}
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
                <Hidden xsDown implementation="css">
                    <Drawer
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        variant="permanent"
                        open
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
            </nav>
            {/*
          <Dialog onClose={handleCloseModal} aria-labelledby="simple-dialog-title" open={open} maxWidth={"xl"}>
               <DialogTitle id="simple-dialog-title">Set backup account</DialogTitle>

              <DialogContent >

            <Grid container justify={"center"} style={{background:"primary"}} >
                    <Grid item xs={2}>
                        <Typography variant={"h6"} color={"secondary"}>
                            Por Teléfono
                        </Typography>

                    </Grid>
                    <Grid item xs={4}>
                       <IconButton color={"primary"} />
                    </Grid>

                    <Grid item xs={6}>
                        <a href={"https://api.whatsapp.com/send?phone=34608682668"}>+34 608 682 668</a>
                    </Grid>
                </Grid>

        </DialogContent>




          </Dialog>*/}

            <Dialog onClose={handleCloseModal} aria-labelledby="customized-dialog-title" open={open} maxWidth={"xs"} fullWidth >
                <DialogTitle id="customized-dialog-title" onClose={handleClose}>


                      <Typography gutterBottom variant={'h5'} color={"primary"}>
                         Enjoy Travel Holding
                    </Typography>

                </DialogTitle>
                <DialogContent dividers >



                        <Typography gutterBottom variant={'h5'} className={classes.subtitle}>
                        Por Teléfono
                    </Typography>

                    <Grid container className={classes.linea} >

                        <Grid item xs={2} borderRight={1}>
                            <PhoneInTalkIcon fontSize={"default"} color={"white"}/>
                        </Grid>

                        <Grid item xs={10}>



                            <Typography gutterBottom variant={"subtitle1"} color={"initial"}>
                       <a href={"tel:+34 935 830 936"} className={classes.ref}> +34 935 830 936</a>
                    </Typography>

                        </Grid>

                    </Grid>



                       <Typography gutterBottom variant={'h5'} className={classes.subtitle}>
                        Por Whatsapp
                    </Typography>

                     <Grid container className={classes.linea}>

                        <Grid item xs={2} borderRight={1}>
                            <WhatsAppIcon fontSize={"default"} color={"white"}/>
                        </Grid>

                        <Grid item xs={10}>

                            <Typography gutterBottom variant={"subtitle1"} color={"initial"}>
                       <a href={"https://api.whatsapp.com/send?phone=34608682668"} className={classes.ref}> +34 608 682 668</a>
                    </Typography>

                        </Grid>

                    </Grid>

                     <Typography gutterBottom variant={'h5'} className={classes.subtitle}>
                        Por E-mail
                    </Typography>

                     <Grid container className={classes.linea}>

                        <Grid item xs={2} borderRight={1}>
                            <MailOutlineIcon fontSize={"default"} color={"white"}/>
                        </Grid>

                        <Grid item xs={10}>

                            <Typography gutterBottom variant={"subtitle1"} color={"initial"}>
                       <a href={"mailto:info@enjoytravelholding.com"} className={classes.ref}> info@enjoytravelholding.com</a>
                    </Typography>

                        </Grid>

                    </Grid>





                </DialogContent>
                <DialogActions>

                </DialogActions>
            </Dialog>

        </React.Fragment>
    );
}

ResponsiveDrawer.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    container: PropTypes.any,
};

export default ResponsiveDrawer;