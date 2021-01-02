import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {useParams} from 'react-router-dom'
import Shoes from '../Shoes.json'
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import Grid from '@material-ui/core/Grid';
import '../App.css'
import Box from '@material-ui/core/Box';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import {useNavigate} from 'react-router-dom'

const useStyles = makeStyles({
  root: {
    maxWidth: '100%',
    minHeight: '100px'
  },
  addToCartBtn: {
    width: '100%',
    border: '2px solid #00695f',
    color: '#00695f',
    '&:hover':{
      border: '2px solid #2E8B57',
      color: '#2E8B57'
    },
    '&:active':{
      border: '2px solid #2E8B57',
      color: '#2E8B57'
    },
  },
  totalPrice:{
    float:'right'
  }
});

export default function ProductItem() {
  const classes = useStyles();
  const { id } = useParams();
  const [count, setCount] = useState(1)
  const navigate = useNavigate()
  const shoe = Shoes[id]

   function navigateTo(page){
     console.log(page)
    navigate('/'+page)
  }
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="400"
          image={shoe.src}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={12} lg={6} md={6} sm={6}>
              <Typography gutterBottom variant="h5" component="h2">
                {shoe.title}
              </Typography>
            </Grid>
            <Grid item xs={12} lg={6} md={6} sm={6}>
              <Typography gutterBottom variant="h6" component="h2" className={classes.totalPrice}>
               Total: Rs. {count * shoe.price}
              </Typography>
            </Grid>
          </Grid>
          <Typography variant="body2" color="textSecondary" component="p">
           {shoe.description}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          <Box fontStyle="italic" m={1}>
          Rs. {shoe.price}
          </Box>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4} lg={2} xl={2}>
          <Button size="small"  className={classes.addToCartBtn} variant="outlined" color="secondary" startIcon={<AddShoppingCartIcon />} onClick={()=>navigateTo(`Order/${id}/${count}`)}>
              Add to cart
          </Button>
        </Grid>
        <Grid item xs={12} sm={0} md={2} lg={4} xl={4}></Grid>
        <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
          <div className="quantity">
            <Button className="plus-btn" type="button" name="button" onClick={()=>setCount(count+1)}>
              <AddIcon />
            </Button>
            <input type="text" nameName="name" value={count} />
            <Button className="minus-btn" type="button" name="button" onClick={()=>setCount(count !==1? count-1: 1)}>
              <RemoveIcon/>
            </Button>
          </div>
        </Grid>
      </Grid>
      </CardActions>
    </Card>
  );
}
  