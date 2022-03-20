import React from 'react';
import { Grid, makeStyles, Typography } from '@material-ui/core';

const useStyle = makeStyles((theme)=>({
root:{
color:'#0077b6',
fontSize:"100px",
textAlign:"center",



},
}))


export function Header() {
const classes = useStyle();
return(
<div>
  <Grid container xs={12}>
    <Grid item xs={12}  > 

<Typography variant='h6' color='primary' classes={{root:classes.root}}>
              Rastreamento
            </Typography>
    </Grid>
  </Grid>
</div>



        
        
        
    )
    
}