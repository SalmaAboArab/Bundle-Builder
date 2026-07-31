import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#4E2FD2",
      light: "#6C4DFF",
    },
    secondary: {
      main: "#EDF4FF",
    },
  },
  typography: {
    fontFamily: "Gilroy, Arial, sans-serif",
    button: {
      textTransform: "none",
    },
  },
});

export default theme;