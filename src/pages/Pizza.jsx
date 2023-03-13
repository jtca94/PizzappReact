import { Container } from "@mui/system";
import { Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { useApi } from "../context/ContextApi";
import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import { ListItem } from "@mui/material";


export default function Pizzas() {
    const { Id } = useParams();
    const { data, loading } = useApi();
    const pizza = data.find((item) => item.id === Id)
    console.log(pizza);



    return (
        
        <Container>
            {loading ? <Typography variant="h4" component="h1">Loading...</Typography> : 
            <Grid container>
                <Grid xs={6} item>
                    
                    <Box
                        component="img"
                        src={pizza.img}
                        alt={pizza.name}
                        sx={{ width: "100%", height: "100%" }}
                      
                    />
                </Grid>
                <Grid item xs={6}>
                    <Typography variant="h4" component="h1">
                        {pizza.name}
                    </Typography>
                    <Typography sx={{fontWeight: 300}} variant="h6" component="h2">
                        {pizza.desc}
                    </Typography>
                  
                    <Typography variant="body1" component="p">
                        {pizza.ingredients.map((ingredient) => {
                            return <ListItem key={ingredient} >{ingredient}</ListItem>;
                        })}
                    </Typography>
                    <Typography variant="h6" component="h2">
                        $ {pizza.price.toLocaleString("De-de")} -.
                    </Typography>
                </Grid>
            </Grid>
            }
        </Container>
    );
}
