import { Container } from "@mui/system"
import { Typography, Divider } from "@mui/material"
import PizzaCard from "../components/PizzaCard"
export default function pizzas() {

    return (
        <Container sx={{my: 3}} >
            <Typography 
                align="center" 
                variant='h2' 
                component='h1'

                sx={{pb: 3, fontWeight: 400}}
                >
                Nuestra variedad de pizzas
            </Typography>
            <Divider 
                sx={{mb: 3}}
            />
            <PizzaCard/>

        </Container>
    )
}