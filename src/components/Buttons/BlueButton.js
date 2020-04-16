import React, {useState} from "react";
import  {makeStyles} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import {blue} from "@material-ui/core/colors";

const primary = blue[300]

const useStyle = makeStyles({
    root: {
        background: '#0064ae',
        borderRadius: 0,
        boxShadow: '0 3px 5px 2px rgba(0, 0, 0, 0.2)',
        color: 'white',
        height: 48,
        padding: "0 10px",
        textTransform: "none",

        '&:hover ':{
            background: '#56bfef',
        },


    }
});


const BlueButton = (props) => {
    const [name, setName] = useState(props.name)
     const [icon, setIcon] = useState(props.icon)
    const classes = useStyle();

    return (

        <Button className={classes.root}  endIcon={icon} color="default" size="small">{name}</Button>

    )

}
export default BlueButton
