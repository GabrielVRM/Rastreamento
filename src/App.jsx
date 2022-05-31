import React from 'react'
import { CssBaseline } from '@mui/material'
import Dados from './Components/Dados/Rastreio'
import Header from './Components/Header/Index'

export default function app () {
  return (
    <>
        <CssBaseline />
        <Header />
        <Dados/>
    </>
  )
}
