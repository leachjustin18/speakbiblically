import {red} from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    typography: {
        userNextVariation: true,
        fontFamily: ['Montserrat', 'Arial'],
        fontSize: 16
    },
    primary: {
        main: '#556cd6',
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
});

export default theme;
