import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';

export const BaseTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#484CAD",
    },
    secondary: {
      main: green[500],
    },
  },
});