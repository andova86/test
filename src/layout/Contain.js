import React from 'react'

import {BrowserRouter, Route, Switch} from "react-router-dom";
import Footer from "./Footer";
import Header from './Header'
import Home from "../pages/Home";
import CountryDetail from "../pages/Countries/CountryDetail"
import CssBaseline from "@material-ui/core/CssBaseline";
import 'typeface-roboto';
import Inscription2 from "../pages/Login/Inscription2";


const Contain = (props) => {


    return (
        <BrowserRouter>

            <CssBaseline/>
            <Header/>
            <main>
                <Switch>
                    <Route path="/"
                           exact
                           component={Home}/>
                    <Route path="/inscription"
                           exact
                           component={Inscription2}/>
                    <Route path="/:texto/detalle"
                           exact
                           component={CountryDetail}/>
                </Switch>
            </main>

            <Footer/>

        </BrowserRouter>

    )
}

export default Contain