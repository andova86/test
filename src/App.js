import React, {Component} from 'react';
import {ThemeProvider} from '@material-ui/core'

import './App.css';

import Contain from "./layout/Contain";
import theme from '../src/layout/themeConfig'
import Button from "@material-ui/core/Button";


class App extends Component {
  render () {
    return (
        <ThemeProvider theme={theme}>

          <Contain/>
       </ThemeProvider>

    );
  }
}


export default App;
