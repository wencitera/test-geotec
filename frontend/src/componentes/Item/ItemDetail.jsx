import { ArrowBack, ShoppingCart } from "@mui/icons-material"
import { Button, Grid, Paper, Typography } from "@mui/material"
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { ItemNombre } from "./Detail/ItemNombre";
import { ItemTalle } from "./Detail/ItemTalle";
import { ItemImagen } from "./Detail/ItemImagen";
import { ItemDescripcion } from "./Detail/ItemDescripcion";
import { ItemPrecio } from "./Detail/ItemPrecio";
import axiosClient from "../../api/AxiosClient";

export const ItemDetail = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [item, setItem] = useState({
    id: 0,
    nombre: "",
    descripcion: "",
    talle: "",
    precio: 0.00,
    imagen: "",
  })

  useEffect(() => {
    let suscribeApi = true;
    axiosClient.get(`Items/${params.itemId}`)
      .then((r) => suscribeApi && setItem(r.data))
      .catch((err) => console.log(err.response.data))

    return () => suscribeApi = false;
  }, [params])

  return <div style={{ m: 5, height: '100vh' }}>
    <Button sx={{ m: 2 }} startIcon={<ArrowBack />} color="secondary" variant="contained" onClick={() => navigate(-1)}>
      Volver
    </Button>
    <Paper sx={{ p: 3 }}>
      <Grid container justifyContent="center" alignItems={"center"}>
        <Grid item xs={12}>
          <ItemNombre nombre={item.nombre} />
          <ItemTalle talle={item.talle} />
        </Grid>
        <Grid item xs={12} md={6}>
          <ItemImagen imagen={item.imagen} nombre={item.nombre} width={"400px"} />
        </Grid>
        <Grid item xs={12} md={6}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h5"><b>Descripcion</b></Typography>
              <ItemDescripcion descripcion={item.descripcion} />
            </Grid>
            <Grid item xs={12}>
              <ItemPrecio precio={item.precio} prefix={"Precio:"} />
            </Grid>
            <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
              <Button sx={{ width: "300px" }} color="secondary" variant="contained" startIcon={<ShoppingCart />}>Comprar</Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  </div >


}
