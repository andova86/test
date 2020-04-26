import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {CssBaseline} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import {ErrorMessage, Field} from "formik"
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginTop: theme.spacing(1),
    },


}));


export interface FormikSelectItem{
    label:string;
    value:string;
}
interface FormikFieldProps {
    name: string;
    label: string;
    items:FormikSelectItem[];


}


const FormikField: React.FC<FormikFieldProps> = ({name, label, items, error,required}) => {
    const classes = useStyles();


    return (




        <FormControl >
            <InputLabel>Position</InputLabel>
            <Select autoWidth >
                {items.map(item =>
                    <MenuItem key={item.value} value={item.value}>{item.label}</MenuItem>

                )}
            </Select>
            <FormHelperText>Requerido</FormHelperText>
        </FormControl>


    );
}

export default FormikField;
