import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
    primary: {
      main: '#2b7a78',
      light: '#3aafa9',
      dark: '#17252a',
      contrastText: '#fff',
    },
    secondary: {
      main: '#5e5e5e',
      light: '#8b8b8b',
      dark: '#343434',
      contrastText: '#fff',
    },
  },
  shape: {
    borderRadius: 8,
  },
  // Example: Override
  // overrides: {
  //   MuiDrawer: {
  //     paper: {
  //       background: '#18202c',

  //       '& *': { color: 'rgba(255, 255, 255, 0.7)' },
  //     },
  //   },
  // },
});

export default theme;
