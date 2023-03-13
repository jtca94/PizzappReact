import React, { useState, useEffect } from 'react';
import { Zoom, Grid, Card, CardMedia, CardContent, Typography, CardActions, Button, Divider, Container, useMediaQuery, Pagination } from '@mui/material';
import { useApi } from '../context/ContextApi';

export default function CardPizza() {
    const { data } = useApi();
    // funcion para saber si es una pantalla es sm
    const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));
    //estado de la pagina actual
    const [currentPage, setCurrentPage] = useState(1);
    //estado de los items por pagina y si es sm se muestra 1 sino 3
    const [itemsPerPage, setItemsPerPage] = useState(isSmallScreen ? 1 : 3);
    //calculo de la pagina actual
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
    //calculo de las paginas totales
    const totalPages = Math.ceil(data.length / itemsPerPage);
    //cada vez que cambie el data o el isSmallScreen se actualiza el estado
    useEffect(() => {
        setCurrentPage(1);
        setItemsPerPage(isSmallScreen ? 1 : 3);
    }, [data, isSmallScreen]);
    //funcion para cambiar de pagina
    const handleChange = (event, value) => {
        setCurrentPage(value);
    };

    return (
        <>
            <Grid container spacing={2}>
                {currentItems.map((pizza) => {
                    const { id, name, desc, price, img } = pizza;
                    return (
                        <Zoom key={id} in={true} >
                            <Grid item xs={12} sm={6} md={4}>
                                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column'  }}>
                                    <CardMedia component="img" alt={name} height="140" image={img} />
                                    <CardContent sx={{ flexGrow: 1 }}>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {name}
                                        </Typography>
                                        <Typography sx={{ mb: 2 }} variant="body2" color="text.secondary">
                                            {desc}
                                        </Typography>
                                        <Divider />
                                    </CardContent>
                                    <Typography
                                            sx={{ mt: 2, display: 'flex', justifyContent: 'flex-end', pr: 2 }}
                                            variant="h6" >
                                            $ {price.toLocaleString('De-de')} -.
                                        </Typography>
                                    <CardActions sx={{p: 3}}>
                                       
                                        {/* hay que pasar a traves de context la logica de los botones */}
                                        <Button color='primary' variant='outlined' size="small">Ver más</Button>
                                        <Button color='third' variant='contained' size="small">Agregar</Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        </Zoom>
                    );
                })}
            </Grid>
            <Container
                sx={{ display: 'flex', justifyContent: 'center' }}
            >
                <Pagination
                    color='secondary'
                    sx={{ mt: 4 }}
                    count={totalPages}
                    page={currentPage}
                    onChange={handleChange} />
            </Container>
        </>
    );
}
