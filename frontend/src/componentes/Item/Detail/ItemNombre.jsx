import { Typography } from '@mui/material'
import React from 'react'

export const ItemNombre = ({nombre}) => {
    return (
        <Typography variant="h5">
            <b>{nombre}</b>
        </Typography>
    )
}
