import { ListItem, Skeleton } from "@mui/material";
import { Card, CardContent, CardActions, Grid, Divider, List } from "@mui/material";

export default function Skeletons() {
    return (
        <>
            <Grid item xs={12} sm={4} md={4}>
                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <Skeleton
                        variant="rectangular"
                        width='100%'
                        height={140}
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                        <Skeleton
                            variant="h5"
                            width='100%'
                        />
                        <Divider />
                        <List
                        >
                            <ListItem >
                                <Skeleton
                                    variant="p"
                                    width='100%'
                                />
                            </ListItem>
                            <ListItem >
                                <Skeleton
                                    variant="p"
                                    width='100%'
                                />
                            </ListItem>
                            <ListItem >
                                <Skeleton
                                    variant="p"
                                    width='100%'
                                />
                            </ListItem>
                            <ListItem >
                                <Skeleton
                                    variant="p"
                                    width='100%'
                                />
                            </ListItem>
                        </List>
                    </CardContent>
                    <Skeleton
                        variant="h6"
                        width='100%'
                    />
                    <CardActions sx={{ p: 3 }}>
                        <Skeleton
                            variant="button"
                            width={100}
                        />
                        <Skeleton
                            variant="button"
                            width={100}
                        />
                    </CardActions>
                </Card>
            </Grid>
        </>
    );
}
