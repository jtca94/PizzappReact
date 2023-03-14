import { Container } from "@mui/system"
import { Typography } from "@mui/material"
import { Box } from "@mui/system"
import { Link } from "react-router-dom"

export default function Page404() {
    return (
        <Container maxWidth='sm' >
            <Typography
                variant='h5'
                sx={{ textAlign: 'center', my: 3 }}
            >Ups no encontramos la pizza que buscabas
            </Typography>
            <Link to='/' >
            <Box
                component='img'
                src='/images/404Img.jpg'
                alt='Landing Image 404'
                sx={{ width: '50%', height: 'auto', alignContent: 'center', display: 'block', mx: 'auto' }}
            />
            </Link>
            <Typography
                align="center"
                paragraph
                sx={{ my: 3 }}
            >
                Haz click en la pizza para volver a la página principal
            </Typography>
        </Container>
    )

}