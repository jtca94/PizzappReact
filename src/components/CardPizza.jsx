import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';
import Grid from '@mui/material/Grid';
import { useApi } from '../context/ContextApi';
export default function CardPizza() {

    const { data } = useApi();
    console.log(data)
    return (
        <>
            {data.map((pizza) => {
                const { id, name, desc, ingredients, price, img } = pizza;
                return (
                    <Grid key={id} item sm={12} md={3}>
                    <Card  sx={{ maxWidth: 345 }}>
                        <CardMedia
                            component="img"
                            alt={name}
                            height="140"
                            image={img}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {desc}
                            </Typography>
                            <Divider />
                            <List >
                                
                                    {ingredients.map((ingredient) =><ListItem key={ingredient} > <ListItemText
                                    component="li"
                                    variant="body2" 
                                    primary={ingredient}
                                    /></ListItem>)}
                             
                            </List>
                            <Divider />
                            <Typography variant="body2" color="text.secondary">
                                {price}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Share</Button>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                    </Grid>
                )
            })}
        </>

    )
}

// {data === null ? null : data.map((pizza) => {
//     const { id, name, desc, ingridients, price, img } = pizza;
//     <Card key={id} sx={{ maxWidth: 345 }}>
//         <CardMedia
//             component="img"
//             alt={name}
//             height="140"
//             image={img}
//         />
//         <CardContent>
//             <Typography gutterBottom variant="h5" component="div">
//                 {name}
//             </Typography>
//             <Typography variant="body2" color="text.secondary">
//                 {desc}
//             </Typography>
//             <Divider />
//             <ListItem>

//                 {ingridients.map((ingridient) => <ListItemText key={ingridient} >{ingridient}</ListItemText>)}

//             </ListItem>
//
//         </CardContent>
//         <CardActions>
//             <Button size="small">Share</Button>
//             <Button size="small">Learn More</Button>
//         </CardActions>
//     </Card>
//     })}