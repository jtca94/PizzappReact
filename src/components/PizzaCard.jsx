import { Grid, Card, CardMedia, CardContent, Typography, CardActions, Button, Divider, List, ListItem, ListItemText } from '@mui/material';
import { useApi } from '../context/ContextApi';
import LabelOutlinedIcon from '@mui/icons-material/LabelOutlined';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
export default function PizzaCard() {

    const { data, handleClick, handleClickAdd } = useApi();
    return (
        <Grid container spacing={2}>
            {data.map((pizza) => {
                const { id, name, ingredients, price, img } = pizza;
                return (

                    <Grid key={id} item xs={12} sm={6} md={3}>
                        <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                            <CardMedia component="img" alt={name} height="140" image={img} />
                            <CardContent sx={{ flexGrow: 1 }}>
                                <Typography gutterBottom variant="h5" component="div">
                                    {name}
                                </Typography>
                                <Divider />
                                <List
                                    disablePadding={true}
                                    dense={true}>
                                    {ingredients.map((ingredient) => {
                                        return (
                                            <ListItem
                                                divider={true}
                                                key={ingredient}>
                                                <LabelOutlinedIcon 
                                                    size='small'
                                                    sx={{ mr: 1 }}
                                                />
                                                <ListItemText
                                                    primary={ingredient.charAt(0).toUpperCase() + ingredient.slice(1)}

                                                />
                                            </ListItem>)
                                    }
                                    )}
                                </List>
                            </CardContent>
                            <Typography
                                sx={{ mt: 2, display: 'flex', justifyContent: 'flex-end', pr: 2 }}
                                variant="h6" >
                                $ {price.toLocaleString('De-de')} -.
                            </Typography>
                            <CardActions sx={{ p: 3 }}>

                                {/* hay que pasar a traves de context la logica de los botones */}
                                <Button onClick={() => handleClick(id)} color='primary' variant='outlined' size="small">Más</Button>
                                <Button startIcon={<AddShoppingCartIcon />} onClick={() => handleClickAdd(pizza)} color='third' variant='contained' size="small">Agregar</Button>
                            </CardActions>
                        </Card>
                    </Grid>

                );
            })}
        </Grid>
    )
}