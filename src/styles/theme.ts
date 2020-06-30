import { createMuiTheme } from '@material-ui/core/styles';
import { blue, red, grey } from '@material-ui/core/colors';

export default createMuiTheme({
  palette: {
    primary: {
      main: blue[500],
    },
    secondary: {
      main: '#fff',
      dark: grey[300],
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
});
