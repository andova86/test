import  {createMuiTheme} from "@material-ui/core";

import blue from "@material-ui/core/colors/blue";

const theme = createMuiTheme({
palette: {
          primary: {
              main:'#0064ae',
              dark:blue[900],
              light:blue[300],
          }
}


})

export  default  theme