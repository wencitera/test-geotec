import { Grid, LinearProgress, List, Paper, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom";
import axiosClient from "../../api/AxiosClient";
import { NotFound } from "../NotFound";
import { ItemDescripcion } from "./Detail/ItemDescripcion";
import { ItemImagen } from "./Detail/ItemImagen";
import { ItemNombre } from "./Detail/ItemNombre";
import { ItemPrecio } from "./Detail/ItemPrecio";
import { ItemTalle } from "./Detail/ItemTalle";

const useStyles = makeStyles(() => ({
  list:
  {
    '&::-webkit-scrollbar': {
      width: 0
    },
    overflow: "auto",
    maxHeight: "90vh"
  },
  detalles: {
    textDecoration: 'none',
    color: 'black',
    fontFamily: 'sans-serif',
  }
}))

export const ItemList = () => {
  const [loading, setLoading] = useState(true);
  const [items, setItems] = React.useState([]);
  const [params] = useSearchParams();

  const classes = useStyles();

  useEffect(() => {

    let suscribeApi = true;
    axiosClient.get(`Items?search=${params.get("search")}`)
      .then((r) => {
        suscribeApi &&
          setLoading(false);
        setItems(r.data);
      }
      )
      .catch((err) => console.log(err.response.data));

    return () => suscribeApi = false;
  }, [params])


  return (
    <List className={classes.list}>
      {loading
        ?
        <LinearProgress color="secondary" />
        :
        <>
          {items.length > 0 ? React.Children.toArray(items.map((item) =>
            <Paper sx={{ m: 2, p: 2 }}>
              <Grid container direction={"row"} spacing={2}>
                <Grid item xs={10}>
                  <ItemNombre nombre={item.nombre} />
                  {<>
                    <ItemTalle talle={item.talle} /> <ItemPrecio precio={item.precio} prefix={"-"} />
                  </>}
                </Grid>
                <Grid item xs={12} md={2}>
                  <ItemImagen imagen={item.imagen} nombre={item.nombre} width={"150px"} />
                </Grid>
                <Grid item xs={12}>
                  <ItemDescripcion descripcion={item.descripcion} />
                </Grid>
                <Grid item xs={12}>
                  <Typography className={classes.detalles} component={"a"} href={`/items/${item.itemId}`}>
                    <b>Ver Detalle</b>
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
          ))
            :
            <NotFound />
          }</>
      }
    </List >
  )
}
