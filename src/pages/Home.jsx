import { Container } from "@mui/system"
import { Typography } from "@mui/material"
import { Grid } from "@mui/material"

import PizzasHome from "../components/PizzasHome"
import Img from '/images/PizzaBanner.jpg'
export default function Home() {
    return (
        <Container
            disableGutters={true}
            maxWidth='false'


        >
            <Container
                maxWidth='false'
                sx={{ py: 5, textAlign: 'center', backgroundImage: `url(${Img})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundBlendMode: 'darken', backgroundColor: 'rgba(0,0,0,0.5)' }} >

                <Typography
                    variant='h2'
                    sx={{ color: 'white', fontWeight: 500 }}

                >
                    ¡Del horno a tu mesa!
                </Typography>
                <Typography
                    variant='h4'
                    sx={{ color: 'white', my: 2, fontWeight: 100 }}
                >
                    Nuestras pizzas recién horneadas <br /> te harán sentir como en la Toscana.
                </Typography>

            </Container>
            <Container sx={{ py: 5 }}>

                <Typography variant='h4' component='h1' sx={{ textAlign: 'center', fontWeight: 400 }}>
                    Tenemos más de 20 sabores de pizzas!
                </Typography>


                <Container
                    maxWidth='md' 
                
                >
                    <Grid container sx={{ py: 5 }}>
                        
                            <PizzasHome />
                        
                    </Grid>
                </Container>

            </Container>


        </Container>
    )


}