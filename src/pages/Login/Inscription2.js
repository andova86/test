import * as React from 'react';
import {Field, Form, Formik} from 'formik';
import {Button, CssBaseline, LinearProgress} from '@material-ui/core';
import {TextField} from 'formik-material-ui';
import {makeStyles} from "@material-ui/core/styles";
/*interface Values {
  email: string;
  password: string;
}*/

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        paddingTop: "88px",
    },

    bloque: {
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(3),
    },


}));
const Prueba = () => {
    const classes = useStyles();
    return (


    <div className={classes.root}>
        <CssBaseline/>
        <main>
            <Formik
                initialValues={{
                    email: '',
                    password: '',
                }}
                validate={values => {

                    const errors: Partial<Values> = {};
                    if (!values.email)
                    {
                        errors.email = '* Requerido';
                    }
                    else
                        if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
                    )
                        {
                        errors.email = 'Correo Inválido';
                    }

                          if (!values.password)
                    {
                        errors.password = '* Requerido';
                    }
                    return errors;
                }}
                onSubmit={(values, {setSubmitting}) => {
                    setTimeout(() => {
                        setSubmitting(false);
                        alert(JSON.stringify(values, null, 2));
                    }, 500);
                }}
            >
                {({submitForm, isSubmitting}) => (
                    <Form>
                        <Field
                            component={TextField}
                            name="email"
                            type="email"
                            label="Email"
                        />
                        <br/>
                        <Field
                            component={TextField}
                            type="password"
                            label="Password"
                            name="password"
                        />
                        {isSubmitting && <LinearProgress/>}
                        <br/>
                        <Button
                            variant="contained"
                            color="primary"
                            disabled={isSubmitting}
                            onClick={submitForm}
                        >
                            Submit
                        </Button>
                    </Form>
                )}
            </Formik>
        </main>
    </div>
)

}

export default Prueba