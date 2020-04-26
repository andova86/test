import React, {useState} from "react";
import  {makeStyles} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import {blue} from "@material-ui/core/colors";

const primary = blue[300]

const useStyle = makeStyles({
    root: {
        background: 'white',
        borderRadius: 0,
        boxShadow: '0 3px 5px 2px rgba(0, 0, 0, 0.2)',
        color: '#0064ae',
        height: 48,
        padding: "0 10px",
        textTransform: "none",
        border: "1px solid #0064ae",

        '&:hover ':{
            background: '#56bfef',
        },


    }
});


const BlueButton = (props) => {
    const [name, setName] = useState(props.name)
     const [icon, setIcon] = useState(props.icon)

     const [type, setType] = useState(props.type)
     const [disabled, setDisabled] = useState(props.type)
    const [onClick, setonClick] = useState(props.type)
    const classes = useStyle();

    return (

        <Button className={classes.root}  endIcon={icon} color="default" size="small" type={type} disabled={disabled} onClick={onClick}>{name}</Button>

    )

}
export default BlueButton
