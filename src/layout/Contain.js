import React from 'react'

import {Route, Switch,  BrowserRouter} from "react-router-dom";
import Footer from "./Footer";
import Header from './Header'
import Home from "../pages/Home";
import CountryDetail from  "../pages/Countries/CountryDetail"
import CssBaseline from "@material-ui/core/CssBaseline";
import 'typeface-roboto';
import Inscription from "../pages/Login/Inscription";


const Contain = (props) => {



    return (
          <BrowserRouter>
               <CssBaseline/>
                <Header/>
                  <main>
                        <Switch>
                            <Route path="/" exact component={Home} />
                              <Route path="/inscription" exact component={Inscription} />
                            <Route path="/:texto/detalle" exact component={CountryDetail} />
                        </Switch>
                  </main>

                 <Footer/>


            </BrowserRouter>

    )
}

export default Contain