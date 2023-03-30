import React from 'react';
import './team.scss'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActions } from '@mui/material';
import logo1 from './img/1.png'


function Team() {
    // const [card, setCard] = useState([])
    return (
        <>
            <div>
                <div className="team">
                    <div className="one">
                        <div className="text">
                            <h4>OUR TEAM</h4>
                            <h1> <img className='log' src={logo1} alt="" />Our Experience Team <br /> Member</h1>
                        </div>
                        <div className="card">
                            {/* {card.map(e=>{ */}
                            <Card className='page' sx={{ maxWidth: 290 }}>
                                <CardMedia
                                    sx={{ height: 190 }}
                                // image="/static/images/cards/contemplative-reptile.jpg"
                                // title="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Lizard
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Lizards are a widespread group of squamate reptiles, with over 6,000
                                        species, ranging across all continents except Antarctica
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    {/* <Button size="small">Share</Button> */}
                                    <Button size="small">Learn More</Button>
                                </CardActions>
                            </Card>
                            <Card sx={{ maxWidth: 290 }}>
                                <CardMedia
                                    sx={{ height: 190 }}
                                    // image="/static/images/cards/contemplative-reptile.jpg"
                                    // title="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Lizard
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Lizards are a widespread group of squamate reptiles, with over 6,000
                                        species, ranging across all continents except Antarctica
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    {/* <Button size="small">Share</Button> */}
                                    <Button size="small">Learn More</Button>
                                </CardActions>
                            </Card>
                            <Card sx={{ maxWidth: 290 }}>
                                <CardMedia
                                    sx={{ height: 190 }}
                                    // image="/static/images/cards/contemplative-reptile.jpg"
                                    // title="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Lizard
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Lizards are a widespread group of squamate reptiles, with over 6,000
                                        species, ranging across all continents except Antarctica
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    {/* <Button size="small">Share</Button> */}
                                    <Button size="small">Learn More</Button>
                                </CardActions>
                            </Card>
                            <Card sx={{ maxWidth: 290 }}>
                                <CardMedia
                                    sx={{ height: 190 }}
                                    // image="/static/images/cards/contemplative-reptile.jpg"
                                    // title="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Lizard
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Lizards are a widespread group of squamate reptiles, with over 6,000
                                        species, ranging across all continents except Antarctica
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    {/* <Button size="small">Share</Button> */}
                                    <Button size="small">Learn More</Button>
                                </CardActions>
                            </Card>
                            {/* })} */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Team;