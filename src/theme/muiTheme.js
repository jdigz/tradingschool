import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
    primary: {
      main: '#0b292f',
      light: '#355158',
      dark: '#000',
      contrastText: '#fff',
      textPrimary: '#3c5259',
      textSecondary: '#4aba8f',
    },
    secondary: {
      main: '#c6c6c6',
      light: '#f9f9f9',
      dark: '#959595',
      contrastText: '#000',
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
