import { Grid, Typography } from '@mui/material'

export default function Header () {
  return (
    <Grid container justifyContent={'center'}>
      <Grid item mt={20}>
        <Typography
          textAlign={'center'}
          fontSize={60}
          fontFamily={'Raleway, serif'}
          fontWeight={'lighter'}
        >
          Vieira`s Rastreamento
        </Typography>
      </Grid>
    </Grid>
  )
}
