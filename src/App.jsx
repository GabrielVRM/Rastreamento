import React from 'react'
import { CssBaseline } from '@mui/material'
import Rastreio from './Components/Mandaê/Rastreio'
import Header from './Components/Header/Index'

export default function app () {
  return (
    <>
        <CssBaseline />
        <Header />
        <Rastreio/>
    </>
  )
}
