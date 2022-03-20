import React from "react";
import { Box, makeStyles, Button, Grid, TextField } from "@material-ui/core";

const useStyle = makeStyles(() => ({
  root:{
      marginTop:"130px",
      textAlign:'center'
  },
  
    TextField: {
        width:"300px" ,

    },
  button:{
    borderRadius:"30px",
    height:"30px",
    width:"200px" ,

  }

}));

export default function Correios() {
  const classes = useStyle();

  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  fetch(
    "https://api.linketrack.com/track/json?user=teste&token=1abcd00b2731640e886fb41a8a9671ad1434c599dbaa0a0de9a5aa619f29a83f&codigo=OS445938500BR",
    requestOptions
  )
    .then((response) => response.json())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));

  return (
    <Box >
      <Grid container spacing={2} justifyContent="center"  className={classes.root}>
        <Grid item xs={12}  className={classes.TextField}>
          <TextField id="standard-basic" label="Codígo" variant="standard"  classes={{root:classes.TextField}}/>
        </Grid>
        <Grid item xs={12} classes={classes.button}>
          <Button variant="outlined" size="large" color="primary" classes={{root:classes.button}}>
            Rastear
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
