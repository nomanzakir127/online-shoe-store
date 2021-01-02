import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import {Typography, Box, Divider} from '@material-ui/core'
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import PhoneIcon from '@material-ui/icons/Phone';
const {inneHeight: height} = window

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: height - 75
  },
  textContent:{
    margin: '10px 10px 10px 20px'
  },
  iconAlign:{
    marginTop: '10px',
    marginLeft: '30px'
  }
}));

export default function About() {
  const classes = useStyles();

  return (
     <>
        <Paper elevation={3} className={classes.root}>
           <Typography gutterBottom  variant="h3" component="h2">
                <Box fontFamily="robo" textAlign="center">
                  S Shoes
                </Box>
            </Typography>
            <Divider />
            <Typography gutterBottom  variant="body1" color="textSecondary" component="p">
                <Box className={classes.textContent} >
                  S Shoes is a famous brand of Pakistan. S Shoes provide online and in-store shopping in Pakistan. You can access our wide range of quality products by just one click.
                    We just provide quality because we care you. you get a wide range of footwear that covers your every need - from school shoes to sports shoes, sandals, formals, casuals and many more. 
                    If your man has arranged to take you for a picnic outdoors, then inject some fun into your date with a pair of above-the-knee blue shorts and a lemon yellow floral print T-shirt. Slip into a pair of flat tan bellies and don't forget to carry that big brown tote bag that complements almost everything. Pump some iron at your local gym and build up those biceps with a pair of lime-green gym shoes for men. These shoes have stellar grip and are ideal for high performance activities. Tone down the colours with a pair of black track pants and a light green sleeveless T-shirt. Shopping for shoes at Myntra is a delight for men, women and children alike. Choose from brands like Steve Madden, Fila, Nike, Reebok and many others and find the right pair to suit every occasion. 
                    The footwear revolution has just begun!
                </Box>
              </Typography>
              <Divider />
              <Typography gutterBottom  variant="body1" color="textSecondary" component="p">
                <Box className={classes.textContent} >
                We have grown to a nationwide retail network of over 40 stores, along with a wholesale network that stretches across 300 independent wholesale distribution points. With exports to a number of countries including Saudi Arabia. Sri Lanka and the United Kingdom, S Shoes has expanded its business into international markets. What keeps S Shoes a step ahead are as distinguishing features of quality, comfort and genuine leather, along with commitment to innovation and new ideas. S Shoes shoes are styled to be trendy and up-to date with the latest fashion trends, offering a wide variety of stylish, comfortable and casual shoes painstakingly designed with hand-sewn craftsmanship and the finest material to make sure that each shoe is a masterpiece.
                </Box>
              </Typography>
              <Divider />
              <Typography fontStyle="italic"  gutterBottom  variant="body1" color="textSecondary" component="p">
                <Box textAlign="center" m={0}>
                  <FacebookIcon className={classes.iconAlign}/>facebook.com/s.shoes <TwitterIcon className={classes.iconAlign}/>twitter.com/s.shoes <PhoneIcon className={classes.iconAlign}/>+92 321 0000123
                </Box>
              </Typography>
        </Paper>
      </> 
  );
}
  