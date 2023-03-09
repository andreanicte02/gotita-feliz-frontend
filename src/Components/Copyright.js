import React from 'react'
import { Typography } from '@mui/material'

const margen={
    mt: 5,
    mb: 5
}

const Copyright = () => {
  return (
    <Typography variant='body2' align='center' sx={margen}>
        
        {'Copyright ©  gotita-feliz'} {new Date().getFullYear()}

    </Typography>
  )
}

export default Copyright