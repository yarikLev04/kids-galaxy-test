import { pxToRem, responsiveFontSizes } from '@/utils/fontUtils';
import { DM_Sans, Poppins } from 'next/font/google';
import { createTheme } from '@mui/material/styles';

const dmSans = DM_Sans({
  weight: ['400', '700'],
  subsets: ['latin']
});

const poppins = Poppins({
  weight: ['400', '700'],
  subsets: ['latin']
});

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#7227AC'
    },
    secondary: {
      main: '#000000'
    },
    common: {
      white: '#FFFFFF',
      black: '#000000'
    }
  },
  typography: {
    fontFamily: [poppins.style.fontFamily, dmSans.style.fontFamily].join(','),
    fontWeightRegular: 400,
    fontWeightBold: 700,
    h1: {
      fontFamily: dmSans.style.fontFamily,
      fontWeight: 700,
      lineHeight: 128 / 128,
      fontSize: pxToRem(64),
      letterSpacing: 2,
      ...responsiveFontSizes({ xs: 48, md: 64, lg: 64 })
    },
    h2: {
      fontFamily: dmSans.style.fontFamily,
      fontWeight: 700,
      lineHeight: 96 / 80,
      fontSize: pxToRem(48),
      ...responsiveFontSizes({ xs: 28, md: 32, lg: 48 })
    }
  },
  components: {
    // Input
    MuiFilledInput: {
      styleOverrides: {
        root: {
          backgroundColor: '#FFFFFF',
          '&.Mui-focused': {
            backgroundColor: '#FFFFFF'
          }
        }
      }
    },
    // Nav bar
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#FFFFFF',
          position: 'sticky'
        }
      }
    },
    MuiChip: {
      styleOverrides: {
        filledSecondary: {
          backgroundColor: '#353945',
          color: '#FCFCFD'
        },
        outlinedSecondary: {
          border: 0
        }
      }
    }
  }
});

export default theme;
