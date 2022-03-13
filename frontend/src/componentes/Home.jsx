import { Container } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React from 'react'
import { NavBar } from './Navbar/NavBar'

const useStyles = makeStyles((theme) => ({
  background: {
    height: "100vh",
    width: "100vw", 
    top: 0, 
    left: 0,
    position: 'fixed',
    background: `linear-gradient(0deg, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.main} 100%)`,
  }
}))

export const Home = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.background}>
      <NavBar />
      <Container>
        {props.children}
      </Container>  
    </div>
  )
}
