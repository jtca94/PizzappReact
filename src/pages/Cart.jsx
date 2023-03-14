import { Container } from "@mui/system"
import { Typography } from "@mui/material"
import { Box, List, ListItem, Button, Grid } from "@mui/material"
import { Divider } from "@mui/material"
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { useApi } from "../context/ContextApi"
import { useMediaQuery } from "@mui/material"
import { useEffect } from "react"

export default function Cart() {

    const { cart, handleClickAdd, handleRemoveItem} = useApi()
    const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));

    
    

    return (
        <Container maxWidth='md'
            sx={{ my: 3 }}
        > 
            <Typography variant='h2' align='center' sx={{ my: 3, fontWeight: 500 }}>
                Tu selección de Pizzas
            </Typography>

            {cart.length === 0 ? <> <Typography variant='h4' align='center' sx={{ my: 3 }}>
                No hay pizzas en el carrito aún!
            </Typography>
            <Box
                sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', my: 3 }}
            >
            <Box
                component='img'
                alt='No hay pizzas en el carrito aún!'
                src='/images/cartImg.png'
                sx={{ width: '50%', height: '50%' }}
            />
             </Box>
            </>
            :

            <Container
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    width: '100%',
                    maxWidth: 600,
                    mx: 'auto',
                    border: '1px solid #ccc',
                    borderRadius: 1,
                    p: 2
                }}
            >
                <List >
                    {cart.map((pizza) => {
                        const { id, cantidad } = pizza;
                        return (
                            // aca va el componente de la pizza en el carrito
                            <ListItem

                                key={id.id}
                            >
                                <Grid container>
                                    <Grid item xs={12} sm={6}
                                        sx={{ display: 'flex', justifyContent: 'start', alignItems: 'center', mt: 2 }}
                                    >
                                        <Box
                                            component='img'
                                            alt={id.name}
                                            src={id.img}
                                            sx={{ width: 80, height: 60, mr: 2, borderRadius: 1, boxShadow: 3 }}
                                        />
                                        <Typography variant='p'>
                                            {id.name}
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12} sm={6}
                                        sx={isSmallScreen ? { display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 2 } : { display: 'flex', justifyContent: 'end', alignItems: 'center', mt: 2 }}
                                    >
                                        <Typography variant='h6' sx={{ mr: 3, color: 'primary.third' }}>
                                            {(parseInt(id.price) * parseInt(cantidad)).toLocaleString('es-CL', { style: 'currency', currency: 'CLP' })}
                                        </Typography>
                                        <Grid item
                                            sx={{ display: 'flex', justifyContent: 'end', alignItems: 'center'}}
                                        >
                                            <Button
                                                onClick={() => handleRemoveItem(id) }
                                                variant="contained"
                                                size="small"
                                                sx={{ backgroundColor: 'primary.fifth', p: 0 }}
                                            ><RemoveIcon sx={{ color: 'white' }} /></Button>
                                            <Typography variant='h5' sx={{ mx: 2 }}>
                                                {cantidad}
                                            </Typography>
                                            <Button
                                                onClick={() => handleClickAdd(id) }
                                                variant="contained"
                                                size="small"
                                                sx={{ backgroundColor: 'primary.ten', p: 0 }}
                                            ><AddIcon sx={{ color: 'white' }} /></Button>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </ListItem>
                        )
                    })}
                </List>
                <Divider />
                <Container
                    sx={{ display: 'flex', justifyContent: 'space-between', my: 1, p: 1, }}
                >
                    <Typography variant='h6' sx={{ my: 2, textAlign: 'right', backgroundColor: 'primary.main', color: 'white', p: 2, borderRadius: 2 }}>
                        Total: {cart.reduce((acc, pizza) => acc + (parseInt(pizza.id.price) * parseInt(pizza.cantidad)), 0).toLocaleString('es-CL', { style: 'currency', currency: 'CLP' })}
                    </Typography>
                    <Button color="success" size="large" variant='contained' sx={{ px: 5, my: 2, color: 'white' }}>Ir a pagar</Button>
                </Container>
            </Container>
            }
        </Container>
    )
}