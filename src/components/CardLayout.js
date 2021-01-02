import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import {useNavigate} from 'react-router-dom'
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  shopBtn: {
    width: '50%',
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
  }
});

export default function CardLayout(props) {
  const classes = useStyles();
  const {item, id} = props
  const navigate = useNavigate()

  function showItem(link){
    console.log(link)
     navigate(link)
  }
  
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={item.src}
          title={item.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          {item.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          {item.description}
          </Typography>
          <Typography variant="body3" color="textSecondary" component="p">
          <Box fontStyle="italic" m={1}>
          Rs. {item.price}
          </Box>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" className={classes.shopBtn} variant="outlined" color="secondary" onClick={() => showItem(`${id}`)}>
          Shop
        </Button>
      </CardActions>
    </Card>
  );
}