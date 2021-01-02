import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import {Typography, Box, Divider} from '@material-ui/core'
import ShopTwoIcon from '@material-ui/icons/ShopTwo';
import { useNavigate, useParams } from 'react-router-dom';
import shoes from '../Shoes.json'

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '60%'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  orderBtn: {
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
  }
});

export default function Order() {
  const classes = useStyles()
  const {id, quantity} = useParams()
  const navigate = useNavigate()

  const navigateTo = (page) => {
     navigate('/'+ page)
  }

  const amount = quantity * shoes[id].price + 150;
  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title}  gutterBottom>
            <Box fontWeight="fontWeightBold">
                Product: {shoes[id].title}
            </Box>
        </Typography>
        <Divider />
        <Typography className={classes.title}  gutterBottom>
          <Box fontWeight="fontWeightBold">
             Item Price: Rs. {shoes[id].price}
          </Box>
        </Typography>
        <Divider />
        <Typography className={classes.title}  gutterBottom>
          <Box fontWeight="fontWeightBold">
            Quantity: {quantity > 1 ? quantity +' pairs' : quantity +' pair'}
          </Box>
        </Typography>
        <Divider />
        <Typography className={classes.title}  gutterBottom>
          <Box fontWeight="fontWeightBold">
            Amount : Rs. {quantity * shoes[id].price}
          </Box>
        </Typography>
        <Divider />
        <Typography className={classes.title}  gutterBottom>
          <Box fontWeight="fontWeightBold">
            Delivery Charges: Rs. 150
          </Box>
        </Typography>
        <Divider />
        <Typography className={classes.title}  gutterBottom>
          <Box fontWeight="fontWeightBold">
            Total Amount: Rs. {amount}
          </Box>
        </Typography>
        <Divider />
      </CardContent>
      <CardActions>
        <Button className={classes.orderBtn} size="small" variant="outlined" color="secondary" startIcon={<ShopTwoIcon />} onClick={() => navigateTo(`Ordered/${amount}`)}>Place Order </Button>
      </CardActions>
    </Card>
  );
}



