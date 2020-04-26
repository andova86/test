

import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {CssBaseline} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import {ErrorMessage, Field} from "formik"




const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
         marginTop: theme.spacing(1),
    },


}));

interface FormikFieldProps {
     name:string;
   label:string;
   type?:string;

}




const FormikField: React.FC<FormikFieldProps> = ({ name, label, type }) => {
    const classes = useStyles();


    return (




                <Field
                    required
                as={TextField}
                autoComplete={"off"}
                label={label}
                    type={type}
                name={name}
                helperText={<ErrorMessage name={name} />}
                fullwidth
                />



    );
}

export default FormikField;
