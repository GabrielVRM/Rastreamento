import { useEffect, useState } from 'react';
import { Typography } from '@mui/material';
import axios from 'axios'

export default function Correios () {

  const [dado, setDado] = useState([])
    const config = {
        method: 'GET',
        url: 'https://api.linketrack.com/track/json?user=gabriel.vieira@1pay.com.br&token=65b1b78d47e741653db8e23f81d6a593d96cda29ccf0295d37658fe711d3b181&codigo=OS445938500BR',
      };
    
      axios(config)
      .then(function (response) {
       setDado(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log('Erro Correios');
      })
      
      return(
        
        <>
        {dado &&
        dado.eventos &&
        dado.eventos.map((item, index) => {  
          <Typography key={index}>
            {item.status}
            </Typography>
       console.log(dado)
      })
    }
        </>
    )
    
    
}
