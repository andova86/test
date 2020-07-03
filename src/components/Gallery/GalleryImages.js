import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {CssBaseline} from "@material-ui/core";

import Gallery from 'react-grid-gallery';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,

        marginTop: theme.spacing(1),
    },


}));

const GalleryImages = (props) => {
    const classes = useStyles();
    const [imagenes, setImagenes] = useState(props.imagenes)
    //const url = "https://enjoytravelholding.com/media/"
    const url = "http://127.0.0.1:8000/media/"

    var list = [];

    for (var i = 0; i < imagenes.length; i++) {

        var image = {
            src: url +  imagenes[i].image,
            thumbnail: url +  imagenes[i].image,
            thumbnailWidth: 320,
            thumbnailHeight: 212,
             caption: imagenes[i].description
        };


        list.push(image);
    }

    console.log(list)

    return (
        <div className={classes.root}>
                <Gallery images={list}
                         enableImageSelection={false}

                         showLightboxThumbnails={true}

                />

        </div>







    );
}

export default GalleryImages;
