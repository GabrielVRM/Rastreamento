import { useState } from 'react'
import { Grid, Button, TextField, Typography, Box } from '@mui/material'
import axios from 'axios'

export default function Mandae () {
  const [dados, setDados] = useState([])
  const [code, setCode] = useState()

  const click = () => {
    loadAll()
  }

  const handleChange = event => {
    setCode(event.target.value)
  }

  const loadAll = async () => {
    const config = {
      method: 'get',
      url: `https://api.mandae.com.br/v3/trackings/${code}`,
      headers: {
        authorization: '99aa0a3062e281c74879a367b4308534'
      }
    }

    axios(config)
      .then(function (response) {
        setDados(response.data)
      })
      .catch(function (error) {
        console.log('Erro Mandaê')
      })
  }

  return (
    <Grid container xs={12} lg={12} justifyContent='center'>
      <Grid item xs={12} lg={12} textAlign='center'>
        <TextField
          label='codígo'
          variant="standard"
          fontFamily='Raleway'
          value={code}
          onChange={handleChange}
        />
        <br />
        <br />
        <Button
          style={{ borderRadius: '60px' }}
          variant='outlined'
          size='large'
          color='primary'
          onClick={() => click()}
        >
          Rastrear
        </Button>
      </Grid>

      <Grid item xs={12} textAlign='center' mt={8}>
        {dados &&
          dados.events &&
          dados.events.map((item, index) => {
            switch (index) {
              case 0:
                return (
                  <Box mt={4}>
                  <Typography 
                  textAlign={'center'}
                  fontSize={20}
                  fontFamily={'Raleway, serif'}
                  fontWeight={'900'}
                  >
                    {item.name} 
                    <br />
                    {item.date}
                    <br/>
                    {item.description}
                  </Typography>
                  </Box>
                )
                break
              case 11:
                return (
                  <Box mt={4}>
                  <Typography
                  textAlign={'center'}
                  fontSize={20}
                  fontFamily={'Raleway, serif'}
                  fontWeight={'900'}>
                    {item.name}
                    <br />
                    {item.date}
                    <br/>
                    {item.description}
                  </Typography>
                  </Box>
                )
                break
              case 3:
                return (
                  <Box mt={4}>
                  <Typography
                  textAlign={'center'}
                  fontSize={20}
                  fontFamily={'Raleway, serif'}
                  fontWeight={'900'}
                  >
                    {item.name}
                    <br />
                    {item.date}
                    <br/>
                    {item.description}
                  </Typography>
                    </Box>
                )

              default:
                console.log('erro')
                break
            }
            console.log(dados)
          })}
      </Grid>
    </Grid>
  )
}
