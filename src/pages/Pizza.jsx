import { Container } from "@mui/system";
import { Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { useApi } from "../context/ContextApi";
import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import { ListItem } from "@mui/material";
import { Divider } from "@mui/material";
import { Button } from "@mui/material";
import AddShoppingCart from "@mui/icons-material/AddShoppingCart";


export default function Pizzas() {
    const { Id } = useParams();
    const { data, loading, handleClickBack, handleClickAdd } = useApi();
    const pizza = data.find((item) => item.id === Id)




    return (

        <Container
            sx={{ my: 3 }}
        >
            {loading ? <Typography variant="h4" component="h1">Loading...</Typography> :
                <Grid spacing={3} container>
                    <Grid xs={12} sm={6} item
                        sx={{ display: "flex" }}
                    >

                        <Box
                            component="img"
                            src={pizza.img}
                            alt={pizza.name}
                            sx={{ width: "100%", height: "auto", alignSelf: "center", borderRadius: 2, boxShadow: 5 }}


                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Typography variant="h4" component="h1">
                            {pizza.name}
                        </Typography>
                        <Typography sx={{ fontWeight: 300, py: 3 }} variant="h6" component="h2">
                            {pizza.desc}
                        </Typography>
                        <Divider />
                        <Typography sx={{ pt: 3 }} variant="h6" component="h2">
                            Ingredientes:
                        </Typography>

                        <Typography sx={{ pb: 3 }} variant="body1" component="p">
                            {pizza.ingredients.map((ingredient) => {
                                return <ListItem dense key={ingredient} >{ingredient}</ListItem>;
                            })}
                        </Typography>
                        <Divider />
                        <Container
                            sx={{ display: "flex", alignItems: "center", py: 3 }}
                            disableGutters={true} >
                            <Typography sx={{ flexGrow: 1 }} variant="h6" component="h2">
                                $ {pizza.price.toLocaleString("De-de")}
                            </Typography>
                            <Button sx={{ mr: 3 }} onClick={handleClickBack} color='secondary' variant='outlined' >Volver</Button>
                            <Button startIcon={<AddShoppingCart />} onClick={() => handleClickAdd(pizza)} color='third' variant='contained'>Agregar</Button>
                        </Container>
                    </Grid>
                </Grid>
            }
        </Container>
    );
}
