import { Container } from "@mui/system"
import { Typography } from "@mui/material"
import { useApi } from "../context/ContextApi"

export default function Cart() {

const { cart } = useApi()


    return (
        <Container>
            <Typography variant='h2' component='h1' align='center' sx={{my: 3}}>
                Carrito de compras
            </Typography>
            {cart.map((pizza) => {
                const { id, cantidad } = pizza;
                return (
                    // aca va el componente de la pizza en el carrito


                    <Typography key={id.id} variant='h4' component='h2' align='center' sx={{my: 3}}>
                        {id.name} - {cantidad}
                    </Typography>
                )
            })}
        </Container>
    )
}