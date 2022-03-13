import { Paper, Typography } from '@mui/material'
import React from 'react'

export const NotFound = () => {
  return (
    <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
        <Paper sx={{p:3}}>
            <Typography>
              Oops, no se encontró ningun resultado!
            </Typography>
        </Paper>
    </div>
  )
}
