import React from 'react';
import Carousel from 'react-material-ui-carousel'
import Button from '@material-ui/core/Button';
import '../App.css'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Box from '@material-ui/core/Box';
import { useNavigate } from 'react-router-dom';
const { innerHeight: height } = window;

const useStyles = makeStyles((theme) => ({
    root: {
      backgroundImage: 'linear-gradient( #00B2EE 80%, #FF69B4 50%)',
      width: '100%',
      height: height-75,
      borderRadius: 0,
    },
    media: {
        width: '100%',
        height: '55%'
    },
    shopBtn: {
        width: '20%',
        marginLeft: '40%',
        border: '3px solid #00695f',
        color: '#00695f',
        position: 'absolute',
        bottom: 50,
        '&:hover':{
          border: '3px solid #2E8B57',
          color: '#2E8B57'
        },
        '&:active':{
          border: '3px solid #2E8B57',
          color: '#2E8B57'
        },
        [theme.breakpoints.down('sm')]: {
          width: '80%',
          marginLeft: '10%'
        }
      },
      textContent:{
        color:'#FFFFEE'
      }
      
  }));

export default function CarouselSlider(props)
{
    var items = [
        {
            name: "S Shoes",
            description: "S Shoes provide online and in-store shopping in Pakistan. You can access our wide range of quality products by just one click. All quality brands are available. We just provide quality because we care you."
        },
        {
            name: "Variety",
            description: "Now you get a wide range of footwear that covers your every need - from school shoes to sports shoes, sandals, formals, casuals and many more. So hurry up its going to be out of stock. We provide quality because we care you"
        }
    ]

    return (
        <Carousel>
            {
                items.map( (item, i) => <Item key={i} item={item} index={i}/> )
            }
        </Carousel>
    )
}

function Item(props)
{
    const classes = useStyles()
    const navigate = useNavigate()
    const navigateTo = (page) => {
      navigate('/' + page)
  }
    return (
      
    <div>
     <Card className={classes.root}> 
        <CardActionArea>
          <CardContent>
            <Typography className={classes.textContent} gutterBottom  variant="h5" component="h2">
            <Box fontStyle="italic" textAlign="center" m={7}>
              {props.item.name}
            </Box>
            </Typography>
            <Typography fontStyle="italic" className={classes.textContent} gutterBottom  variant="h6" component="h3">
            <Box textAlign="center" m={0}>
            {props.item.description}
            </Box>
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" className={classes.shopBtn} onClick={()=>navigateTo('Products')} variant="outlined" color="secondary">
            See Products
          </Button>
        </CardActions>
      </Card>
    </div>
    )
}