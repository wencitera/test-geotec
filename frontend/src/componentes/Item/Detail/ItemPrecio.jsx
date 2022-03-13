import { Typography } from '@mui/material'
import React from 'react'

export const ItemPrecio = ({precio, prefix}) => {
  return (
    <Typography variant="caption" color="primary.dark">{prefix} ${precio}</Typography>
  )
}
