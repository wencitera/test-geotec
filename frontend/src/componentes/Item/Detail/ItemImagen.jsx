import React from 'react'

export const ItemImagen = ({ imagen, nombre, width }) => {
    return (
        <img style={{ width: width }} src={`data:image/jpeg;base64,${imagen}`} alt={nombre} />
    )
}
