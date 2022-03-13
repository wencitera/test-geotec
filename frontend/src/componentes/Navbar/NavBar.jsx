import { Search } from '@mui/icons-material'
import { AppBar, IconButton, InputAdornment, TextField, Toolbar } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const useStyles = makeStyles((theme) => ({
    root: {
        borderRadius: "10px",
        '& .MuiInput-root': {
            color: theme.palette.primary.main,
            borderBottom: `2px solid ${theme.palette.primary.main}`,
            '& fieldset': {
                borderBottom: `2px solid ${theme.palette.primary.main}`,
            },
            '& .Mui-focused fieldset': {
                borderBottom: `2px solid ${theme.palette.primary.main}`,
            },
        },
        '& .MuiInputLabel-root': {
            color: theme.palette.primary.main,
        }

    }

}))


export const NavBar = () => {

    const [buscador, setBuscador] = useState("");
    const navigate = useNavigate();
    const classes = useStyles();
    const handleClick = () => {
        let url = "/items";
        if (buscador !== "") {
            url += `?search=${buscador}`;
        }
        navigate(url);
    }

    const handleChange = (event) => {
        setBuscador(event.currentTarget.value);
    }

    return (
        <AppBar color='secondary' position='sticky'>
            <Toolbar sx={{ display: 'flex', justifyContent: "center", alignItems: "center" }}>
                <TextField
                    label="Buscar un producto"
                    autoComplete={'false'}
                    classes={{
                        root: classes.root
                    }}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="start">
                                <IconButton onClick={handleClick}>
                                    <Search color='primary' />
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                    onChange={handleChange}
                    variant="standard"
                />
            </Toolbar>
        </AppBar>
    )
}
