import React from 'react'
import Shoes from '../Shoes.json'
import CardLayout from './CardLayout';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    width:'100%',
    padding: theme.spacing(2),
  },
}));

function Product() {
    const classes = useStyles();
    return (
      <div className={classes.root} >
        <Grid container spacing={2}>
          {Object.keys(Shoes).map((item, index)=>{
          return <Grid item xs={12} sm={12} md={6} lg={4} key={index}><CardLayout item={Shoes[item]} id={item}></CardLayout></Grid>
          })}
        </Grid>
      </div>
    );
  }
  
  export default Product;
  