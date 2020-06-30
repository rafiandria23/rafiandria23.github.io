import { createMuiTheme } from '@material-ui/core/styles';
import { blue, red } from '@material-ui/core/colors';

export default createMuiTheme({
  palette: {
    primary: {
      main: blue[500],
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
});
