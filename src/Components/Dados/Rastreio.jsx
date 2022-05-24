import react, { useEffect, useState } from 'react'
import axios from 'axios'
import { Typography } from '@mui/material'

export default function Dados () {
  const [dados, setDados] = useState([])

  useEffect(() => {
    const config = {
      method: 'get',
      url: 'https://api.mandae.com.br/v3/trackings/ONEPA001651',
      headers: {
        authorization: '99aa0a3062e281c74879a367b4308534'
      }
    }

    axios(config)
      .then(function (response) {
        setDados(response.data)
        console.log(dados)
      })
      .catch(function (error) {
        console.log(error)
      })
  }, [])

  return (
    <>
      {dados &&
            dados.events &&
            dados.events.map((events, key) => {
                return (
                    <>
                  <Typography textAlign={'center'} fontFamily={'Raleway, serif'} fontWeight={'600'}>
                    {events.name}
                  </Typography> <br/>
                  <Typography textAlign={'center'} fontFamily={'Raleway, serif'} fontWeight={'600'}>
                    {events.date} 
                  </Typography>
                  <Typography textAlign={'center'} fontFamily={'Raleway, serif'} fontWeight={'600'}>
                    {events.description} 
                  </Typography>
                </>
              )
            })}
   
    </>
  )
}
