import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper'
import { useParams } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  ordered:{
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '90%',
    marginTop: 20
  }
}));

function getSteps() {
  return ['Order Placed', 'Shipment', 'Delivery'];
}

export default function Ordered() {
  const classes = useStyles();
  const activeStep = 0;
  const steps = getSteps();
  const {amount} = useParams()

  return (
    <div className={classes.root}>
        <Paper>
            <div className={classes.ordered}>
                <Typography className={classes.title}  gutterBottom>
                    <Box fontWeight="fontWeightBold">
                        Your order has been placed
                    </Box>
                </Typography>
                <Typography className={classes.title}  gutterBottom>
                    <Box fontWeight="fontWeightBold">
                        Amount : Rs {amount}
                    </Box>
                </Typography>
                <Typography className={classes.title}  gutterBottom>
                    <Box fontWeight="fontWeightBold">
                            Tracking Id : {Math.floor(Math.random() * 100000000)}
                    </Box>
                </Typography>
            </div> 
            <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map((label) => (
                <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                </Step>
                ))}
            </Stepper> 
            <div className={classes.ordered}>
                <Typography className={classes.title}  gutterBottom>
                    <Box>
                        You can track your order by using above tacking Id. You will get your product within 6 days. Pleace contact us on any mishap.
                    </Box>
                </Typography>
            </div>
        </Paper>
    </div>
  );
}
