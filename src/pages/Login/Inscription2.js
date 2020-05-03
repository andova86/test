import * as React from 'react';
import {ErrorMessage, Field, Form, Formik} from 'formik';
import {Button, CssBaseline, LinearProgress} from '@material-ui/core';
import {RadioGroup, SimpleFileUpload, TextField} from 'formik-material-ui';
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import WhyWorkList from "../../containers/WhyWorkItemList/WhyWorkList";
import Container from "@material-ui/core/Container";
import FormControl from "@material-ui/core/FormControl";
import {Select} from 'formik-material-ui';
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import Box from "@material-ui/core/Box";
import * as Yup from "yup";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import WhiteButton from "../../components/Buttons/WhiteButton";
/*interface Values {
  email: string;
  password: string;
}*/

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        paddingTop: "64px",
    },

    bloque: {
        padding: theme.spacing(3),
        margin: 10,


    },

     backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },


}));

interface FormValues {
    name: string;
    position: string;
}

const InitialValues: FormValues = {
    name: '',
    position: '',
}

const MySchema = Yup.object().shape({
    name: Yup.string()
        .required('Requerido'),
    position: Yup.string()
        .required('seleccione'),
    codigo: Yup.string()
        .min(3, 'Debe tener 3 caracteres')
        .max(3, 'Debe tener 3 caracteres')
        .required('Requerido'),
    direccion: Yup.string()
        .required('Requerido'),
     numero: Yup.string()
        .required('Requerido'),
    file: Yup.string()


        .required('Requerido'),
    activity: Yup.string()
        .required('Requerido'),
    nombre: Yup.string()
        .required('Requerido'),
    apellido: Yup.string()
        .required('Requerido'),
    email: Yup.string()
         .email('Correo inválido')
        .required('Requerido'),
   telefono: Yup.string()
        .required('Requerido'),
    pasword: Yup.string()
        .required('Requerido'),
   pasword2: Yup.string()
       .required('Requerido')
       .when("pasword", {
    is: val => (val && val.length > 0 ? true : false),
    then: Yup.string().oneOf(
      [Yup.ref("pasword")],
      "Debe introducir la misma contraseña a confirmar."
    )
  })





})


const Prueba = () => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

     const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };


    const handleSubmit = (values: FormValues): void => {



        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));

        }, 1000);


    }

    return (


        <div className={classes.root}>
            <CssBaseline/>
            <main>
                <Formik
                    initialValues={InitialValues}
                    validationSchema={MySchema}
                    onSubmit={handleSubmit}
                >
                    {({dirty, isValid}) => (
                        <Form>


                            <Grid container justify={"center"}>

                                <Grid item md={10} xs={12} container={"xl"} justify={"center"}>

                                    <Grid item md={8} sm={6} xs={12} container spacing={1}>
                                        <Paper elevation={3} className={classes.bloque}>
                                            <Grid item xs={12} container spacing={2}>
                                                <Grid item xs={12} container={"xl"} spacing={3} justify={"center"}>
                                                    <Typography variant={"h5"} color={"primary"} style={{paddingBottom: 30}}>
                                                        Creando su Cuenta de Agencia
                                                    </Typography>

                                                    <Divider variant="middle" color={"primary"}/>
                                                </Grid>

                                                <Grid item md={6} xs={12}>
                                                    <Field
                                                        component={TextField}
                                                        name="name"
                                                        type="text"
                                                        label="Nombre Completo"
                                                        variant="outlined"
                                                        fullWidth
                                                        size="small"
                                                    />

                                                </Grid>

                                                <Grid item md={6} xs={12}>
                                                    <Field
                                                        component={TextField}
                                                        name="codigo"
                                                        type="text"
                                                        label="Código (3 Caractéres)"
                                                        variant="outlined"
                                                        fullWidth
                                                        size="small"
                                                    />

                                                </Grid>

                                                <Grid item md={6} xs={12}>
                                                    <Field
                                                        component={TextField}
                                                        name="direccion"
                                                        type="text"
                                                        label="Dirección"
                                                        variant="outlined"
                                                        fullWidth
                                                        size="small"
                                                    />

                                                </Grid>

                                                <Grid item md={6} xs={12}>


                                                    <FormControl fullWidth variant="outlined" size="small">
                                                        <InputLabel htmlFor="paises">Países</InputLabel>
                                                        <Field
                                                            component={Select}
                                                            name="position"
                                                            inputProps={{
                                                                id: 'paises',
                                                            }}
                                                            label={"paises"}


                                                        >

                                                            <MenuItem value="AF">Afganistan</MenuItem>
                                                            <MenuItem value="AL">Albania</MenuItem>
                                                            <MenuItem value="DE">Alemania</MenuItem>
                                                            <MenuItem value="AO">Angola</MenuItem>
                                                            <MenuItem value="AI">Anguila</MenuItem>
                                                            <MenuItem value="AG">Antigua y Barbuda</MenuItem>
                                                            <MenuItem value="SA">Arabia Saudita</MenuItem>
                                                            <MenuItem value="DZ">Argelia</MenuItem>
                                                            <MenuItem value="AR">Argentina</MenuItem>
                                                            <MenuItem value="AM">Armenia</MenuItem>
                                                            <MenuItem value="AW">Aruba</MenuItem>
                                                            <MenuItem value="AU">Australia</MenuItem>
                                                            <MenuItem value="AT">Austria</MenuItem>
                                                            <MenuItem value="AZ">Azerbaijan</MenuItem>
                                                            <MenuItem value="BS">Bahamas</MenuItem>
                                                            <MenuItem value="BH">Bahrein</MenuItem>
                                                            <MenuItem value="BD">Bangladesh</MenuItem>
                                                            <MenuItem value="BB">Barbados</MenuItem>
                                                            <MenuItem value="BE">Belgica</MenuItem>
                                                            <MenuItem value="BZ">Belice</MenuItem>
                                                            <MenuItem value="BM">Bermudas</MenuItem>
                                                            <MenuItem value="BY">Bielorrusia</MenuItem>
                                                            <MenuItem value="MM">Birmania</MenuItem>
                                                            <MenuItem value="BO">Bolivia</MenuItem>
                                                            <MenuItem value="BW">Botsuana</MenuItem>
                                                            <MenuItem value="BR">Brasil</MenuItem>
                                                            <MenuItem value="BN">Brunei</MenuItem>
                                                            <MenuItem value="BG">Bulgaria</MenuItem>
                                                            <MenuItem value="BF">Burkina Faso</MenuItem>
                                                            <MenuItem value="BI">Burundi</MenuItem>
                                                            <MenuItem value="CV">Cabo Verde</MenuItem>
                                                            <MenuItem value="KH">Camboya</MenuItem>
                                                            <MenuItem value="CM">Camerun</MenuItem>
                                                            <MenuItem value="CA">Canada</MenuItem>
                                                            <MenuItem value="TD">Chad</MenuItem>
                                                            <MenuItem value="CL">Chile</MenuItem>
                                                            <MenuItem value="CN">China</MenuItem>
                                                            <MenuItem value="CY">Chipre</MenuItem>
                                                            <MenuItem value="VA">Ciudad estado del Vaticano (Santa
                                                                Sede)
                                                            </MenuItem>
                                                            <MenuItem value="CO">Colombia</MenuItem>
                                                            <MenuItem value="KM">Comores</MenuItem>
                                                            <MenuItem value="CG">Congo</MenuItem>
                                                            <MenuItem value="KR">Corea</MenuItem>
                                                            <MenuItem value="CR">Costa Rica</MenuItem>
                                                            <MenuItem value="CU">Cuba</MenuItem>
                                                            <MenuItem value="DK">Dinamarca</MenuItem>
                                                            <MenuItem value="DJ">Djibouri</MenuItem>
                                                            <MenuItem value="DM">Dominica</MenuItem>
                                                            <MenuItem value="EC">Ecuador</MenuItem>
                                                            <MenuItem value="EG">Egipto</MenuItem>
                                                            <MenuItem value="SV">El Salvador</MenuItem>
                                                            <MenuItem value="AE">Emiratos Arabes Unidos</MenuItem>
                                                            <MenuItem value="ER">Eritrea</MenuItem>
                                                            <MenuItem value="SK">Eslovaquia</MenuItem>
                                                            <MenuItem value="SI">Eslovenia</MenuItem>
                                                            <MenuItem value="ES">Espana</MenuItem>
                                                            <MenuItem value="US">Estados Unidos</MenuItem>
                                                            <MenuItem value="EE">Estonia</MenuItem>
                                                            <MenuItem value="ET">Etiopia</MenuItem>
                                                            <MenuItem value="PH">Filipinas</MenuItem>
                                                            <MenuItem value="FI">Finlandia</MenuItem>
                                                            <MenuItem value="FR">Francia</MenuItem>
                                                            <MenuItem value="GA">Gabon</MenuItem>
                                                            <MenuItem value="GM">Gambia</MenuItem>
                                                            <MenuItem value="GE">Georgia</MenuItem>
                                                            <MenuItem value="GH">Ghana</MenuItem>
                                                            <MenuItem value="GI">Gibraltar</MenuItem>
                                                            <MenuItem value="GD">Granada</MenuItem>
                                                            <MenuItem value="GR">Grecia</MenuItem>
                                                            <MenuItem value="GL">Groenlandia</MenuItem>
                                                            <MenuItem value="GP">Guadalupe</MenuItem>
                                                            <MenuItem value="GU">Guam</MenuItem>
                                                            <MenuItem value="GT">Guatemala</MenuItem>
                                                            <MenuItem value="GY">Guayana</MenuItem>
                                                            <MenuItem value="GF">Guayana francesa</MenuItem>
                                                            <MenuItem value="GN">Guinea</MenuItem>
                                                            <MenuItem value="GQ">Guinea Ecuatorial</MenuItem>
                                                            <MenuItem value="GW">Guinea-Bissau</MenuItem>
                                                            <MenuItem value="HT">Haiti</MenuItem>
                                                            <MenuItem value="NL">Holanda</MenuItem>
                                                            <MenuItem value="HN">Honduras</MenuItem>
                                                            <MenuItem value="HK">Hong Kong R. A. E</MenuItem>
                                                            <MenuItem value="HU">Hungria</MenuItem>
                                                            <MenuItem value="IN">India</MenuItem>
                                                            <MenuItem value="ID">Indonesia</MenuItem>
                                                            <MenuItem value="IQ">Irak</MenuItem>
                                                            <MenuItem value="IR">Iran</MenuItem>
                                                            <MenuItem value="IE">Irlanda</MenuItem>
                                                            <MenuItem value="IS">Islandia</MenuItem>
                                                            <MenuItem value="KY">Islas Caiman</MenuItem>
                                                            <MenuItem value="CK">Islas Cook</MenuItem>
                                                            <MenuItem value="FJ">Islas Fiyi</MenuItem>
                                                            <MenuItem value="FK">Islas Malvinas (Islas
                                                                Falkland)</MenuItem>
                                                            <MenuItem value="MH">Islas Marshall</MenuItem>
                                                            <MenuItem value="PW">Islas Palau</MenuItem>
                                                            <MenuItem value="SB">Islas Salomon</MenuItem>
                                                            <MenuItem value="TC">Islas Turks y Caicos</MenuItem>
                                                            <MenuItem value="IL">Israel</MenuItem>
                                                            <MenuItem value="IT">Italia</MenuItem>
                                                            <MenuItem value="JM">Jamaica</MenuItem>
                                                            <MenuItem value="JP">Japon</MenuItem>
                                                            <MenuItem value="JO">Jordania</MenuItem>
                                                            <MenuItem value="KZ">Kazajstan</MenuItem>
                                                            <MenuItem value="KE">Kenia</MenuItem>
                                                            <MenuItem value="KG">Kirguizistan</MenuItem>
                                                            <MenuItem value="KW">Kuwait</MenuItem>
                                                            <MenuItem value="LA">Laos</MenuItem>
                                                            <MenuItem value="LS">Lesoto</MenuItem>
                                                            <MenuItem value="LV">Letonia</MenuItem>
                                                            <MenuItem value="LR">Liberia</MenuItem>
                                                            <MenuItem value="LY">Libia</MenuItem>
                                                            <MenuItem value="LI">Liechtenstein</MenuItem>
                                                            <MenuItem value="LT">Lituania</MenuItem>
                                                            <MenuItem value="LU">Luxemburgo</MenuItem>
                                                            <MenuItem value="MO">Macao R. A. E</MenuItem>
                                                            <MenuItem value="MK">Macedonia</MenuItem>
                                                            <MenuItem value="MG">Madagascar</MenuItem>
                                                            <MenuItem value="MY">Malasia</MenuItem>
                                                            <MenuItem value="MW">Malawi</MenuItem>
                                                            <MenuItem value="MV">Maldivas</MenuItem>
                                                            <MenuItem value="ML">Mali</MenuItem>
                                                            <MenuItem value="MT">Malta</MenuItem>
                                                            <MenuItem value="MA">Marruecos</MenuItem>
                                                            <MenuItem value="MQ">Martinica</MenuItem>
                                                            <MenuItem value="MU">Mauricio</MenuItem>
                                                            <MenuItem value="MR">Mauritania</MenuItem>
                                                            <MenuItem value="MX">Mexico</MenuItem>
                                                            <MenuItem value="FM">Micronesia</MenuItem>
                                                            <MenuItem value="MD">Moldavia</MenuItem>
                                                            <MenuItem value="MC">Monaco</MenuItem>
                                                            <MenuItem value="MN">Mongolia</MenuItem>
                                                            <MenuItem value="MS">Montserrat</MenuItem>
                                                            <MenuItem value="MZ">Mozambique</MenuItem>
                                                            <MenuItem value="NA">Namibia</MenuItem>
                                                            <MenuItem value="NP">Nepal</MenuItem>
                                                            <MenuItem value="NI">Nicaragua</MenuItem>
                                                            <MenuItem value="NE">Niger</MenuItem>
                                                            <MenuItem value="NG">Nigeria</MenuItem>
                                                            <MenuItem value="NF">Norfolk</MenuItem>
                                                            <MenuItem value="NO">Noruega</MenuItem>
                                                            <MenuItem value="NC">Nueva Caledonia</MenuItem>
                                                            <MenuItem value="NZ">Nueva Zelanda</MenuItem>
                                                            <MenuItem value="OM">Oman</MenuItem>
                                                            <MenuItem value="PA">Panama</MenuItem>
                                                            <MenuItem value="PG">Papua Nueva Guinea</MenuItem>
                                                            <MenuItem value="PK">Paquistan</MenuItem>
                                                            <MenuItem value="PY">Paraguay</MenuItem>
                                                            <MenuItem value="PE">Peru</MenuItem>
                                                            <MenuItem value="PF">Polinesia francesa</MenuItem>
                                                            <MenuItem value="PL">Polonia</MenuItem>
                                                            <MenuItem value="PT">Portugal</MenuItem>
                                                            <MenuItem value="PR">Puerto Rico</MenuItem>
                                                            <MenuItem value="QA">Qatar</MenuItem>
                                                            <MenuItem value="UK">Reino Unido</MenuItem>
                                                            <MenuItem value="CZ">Replubica Checa</MenuItem>
                                                            <MenuItem value="DO">Republica Dominicana</MenuItem>
                                                            <MenuItem value="RW">Ruanda</MenuItem>
                                                            <MenuItem value="RO">Rumania</MenuItem>
                                                            <MenuItem value="RU">Rusia</MenuItem>
                                                            <MenuItem value="WS">Samoa</MenuItem>
                                                            <MenuItem value="AS">Samoa occidental</MenuItem>
                                                            <MenuItem value="KN">San Kitts y Nevis</MenuItem>
                                                            <MenuItem value="SM">San Marino</MenuItem>
                                                            <MenuItem value="PM">San Pierre y Miquelon</MenuItem>
                                                            <MenuItem value="VC">San Vicente e Islas
                                                                Granadinas</MenuItem>
                                                            <MenuItem value="SH">Santa Helena</MenuItem>
                                                            <MenuItem value="LC">Santa Lucia</MenuItem>
                                                            <MenuItem value="ST">Sao Tomas y Principe</MenuItem>
                                                            <MenuItem value="SN">Senegal</MenuItem>
                                                            <MenuItem value="YU">Serbia y Montenegro</MenuItem>
                                                            <MenuItem value="SC">Seychelles</MenuItem>
                                                            <MenuItem value="SL">Sierra Leona</MenuItem>
                                                            <MenuItem value="SG">Singapur</MenuItem>
                                                            <MenuItem value="SY">Siria</MenuItem>
                                                            <MenuItem value="SO">Somalia</MenuItem>
                                                            <MenuItem value="LK">Sri Lanka</MenuItem>
                                                            <MenuItem value="SZ">Suazilandia</MenuItem>
                                                            <MenuItem value="ZA">Sudafrica</MenuItem>
                                                            <MenuItem value="SE">Suecia</MenuItem>
                                                            <MenuItem value="CH">Suiza</MenuItem>
                                                            <MenuItem value="SR">Surinam</MenuItem>
                                                            <MenuItem value="TH">Tailandia</MenuItem>
                                                            <MenuItem value="TW">Taiwan</MenuItem>
                                                            <MenuItem value="TZ">Tanzania</MenuItem>
                                                            <MenuItem value="TJ">Tayikistan</MenuItem>
                                                            <MenuItem value="TP">Timor Oriental</MenuItem>
                                                            <MenuItem value="TG">Togo</MenuItem>
                                                            <MenuItem value="TO">Tonga</MenuItem>
                                                            <MenuItem value="TT">Trinidad y Tobago</MenuItem>
                                                            <MenuItem value="TN">Tunisia</MenuItem>
                                                            <MenuItem value="TM">Turkmenistan</MenuItem>
                                                            <MenuItem value="TR">Turquia</MenuItem>
                                                            <MenuItem value="UA">Ucrania</MenuItem>
                                                            <MenuItem value="UG">Uganda</MenuItem>
                                                            <MenuItem value="UY">Uruguay</MenuItem>
                                                            <MenuItem value="UZ">Uzbekistan</MenuItem>
                                                            <MenuItem value="VE">Venezuela</MenuItem>
                                                            <MenuItem value="VN">Vietnam</MenuItem>
                                                            <MenuItem value="YE">Yemen</MenuItem>
                                                            <MenuItem value="ZM">Zambia</MenuItem>
                                                            <MenuItem value="ZW">Zimbabue</MenuItem>


                                                        </Field>
                                                        {dirty.position  ? <div>{dirty.position}</div> : null}
                                                    </FormControl>


                                                </Grid>

                                                <Grid item md={3} xs={12}>
                                                    <Field
                                                        component={TextField}
                                                        name="numero"
                                                        type="text"
                                                        label="Nro. de Licencia"
                                                        variant="outlined"
                                                        fullWidth
                                                        size="small"

                                                    />

                                                </Grid>

                                                <Grid item md={3} xs={12}>
                                                        <InputLabel htmlFor="iata">IATA</InputLabel>
                                                        <Field component={RadioGroup} name="activity" id="iata" row
                                                               color={"primary"}  size="small">
                                                            <FormControlLabel
                                                                value="si"
                                                                control={<Radio disabled={isValid}/>}
                                                                label="Sí"
                                                                disabled={isValid}
                                                                 size="small"

                                                            />
                                                            <FormControlLabel
                                                                value="no"
                                                                control={<Radio disabled={isValid}/>}
                                                                label="No"
                                                                disabled={isValid}
                                                                 size="small"
                                                            />

                                                        </Field>

                                                    </Grid>

                                                <Grid item md={6} xs={12}>

                                                    <Field component={SimpleFileUpload}
                                                           name="file"
                                                           label="Simple File Upload"
                                                           fullWidth
                                                           variant="outlined"
                                                           size="small"

                                                    />
                                                    <ErrorMessage name="file" />

                                                </Grid>

                                            </Grid>
                                        </Paper>

                                         <Paper elevation={3} className={classes.bloque} style={{marginTop:5}}>
                                            <Grid item xs={12} container spacing={2}>
                                                <Grid item xs={12} container={"xl"} spacing={3} justify={"center"}>
                                                    <Typography variant={"h5"} color={"primary"} style={{paddingBottom: 30}}>
                                                        Titular
                                                    </Typography>

                                                    <Divider variant="middle" color={"primary"}/>
                                                </Grid>

                                                <Grid item md={6} xs={12}>
                                                    <Field
                                                        component={TextField}
                                                        name="nombre"
                                                        type="text"
                                                        label="Nombre(s)"
                                                        variant="outlined"
                                                        fullWidth
                                                        size="small"
                                                    />

                                                </Grid>

                                                <Grid item md={6} xs={12}>
                                                    <Field
                                                        component={TextField}
                                                        name="apellido"
                                                        type="text"
                                                        label="Apellidos"
                                                        variant="outlined"
                                                        fullWidth
                                                        size="small"
                                                    />

                                                </Grid>

                                                <Grid item md={6} xs={12}>
                                                    <Field
                                                        component={TextField}
                                                        name="email"
                                                        type="email"
                                                        label="E-Mail"
                                                        variant="outlined"
                                                        fullWidth
                                                        size="small"
                                                    />

                                                </Grid>

                                                <Grid item md={6} xs={12}>

                                                  <Field
                                                        component={TextField}
                                                        name="telefono"
                                                        type="text"
                                                        label="Teléfono"
                                                        variant="outlined"
                                                        fullWidth
                                                        size="small"
                                                    />



                                                </Grid>

                                                <Grid item md={6} xs={12}>
                                                    <Field
                                                        component={TextField}
                                                        name="pasword"
                                                        type="password"
                                                        label="Contraseña"
                                                        variant="outlined"
                                                        fullWidth
                                                        size="small"

                                                    />

                                                </Grid>



                                                <Grid item md={6} xs={12}>

                                                     <Field
                                                        component={TextField}
                                                        name="pasword2"
                                                        type="password"
                                                        label="Repetir Contraseña"
                                                        variant="outlined"
                                                        fullWidth
                                                        size="small"

                                                    />

                                                </Grid>

                                            </Grid>
                                        </Paper>


                                        <Grid item xs={12} container justify={"center"} style={{paddingTop:20}}>


                                            <Button
                                                variant="outlined"
                                                color="primary"
                                                type={'submit'}
                                                disabled={!dirty || !isValid}
onClick={handleToggle}



                                            >
                                                Enviar Solicitud
                                            </Button>

                                           <Backdrop className={classes.backdrop} open={open} onClick={handleClose}>
        <CircularProgress color="inherit" />
      </Backdrop>
                                        </Grid>


                                    </Grid>


                                    <Grid item md={4} sm={6}  xs={12}>
                                        <Container>
                                            <WhyWorkList/>
                                        </Container>

                                    </Grid>
                                </Grid>


                            </Grid>

                        </Form>


                    )}
                </Formik>
            </main>
        </div>
    )

}

export default Prueba