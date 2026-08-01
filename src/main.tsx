import React from "react";
import ReactDOM from "react-dom/client";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { SnackbarProvider } from "notistack";
import "./fonts.css";

import App from "./App";
import theme from "./theme";
import { AppProvider } from "./context/app-context";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <SnackbarProvider
        maxSnack={3}
        autoHideDuration={3000}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <AppProvider>
          <App />
        </AppProvider>
      </SnackbarProvider>
    </ThemeProvider>
  </React.StrictMode>,
);
