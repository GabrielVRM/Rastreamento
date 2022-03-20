import React from "react";
import { Header } from "./Components/header";
import { createTheme, CssBaseline, makeStyles } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core";
import Correios from "./Components/Correios";

export default function app() {
  const theme = createTheme({
palette:{
  primary:{
    main:'#94d2bd',
  
  },
 
},

  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <Correios/>
      </ThemeProvider>
    </>
  );
}
