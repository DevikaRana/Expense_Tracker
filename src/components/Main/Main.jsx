import React, {useContext}from 'react'
import {Card, CardHeader, CardContent, Typography, Grid , Divider, List } from '@material-ui/core';
import { ExpenseTrackerContext } from '../../context.js/context';

import useStyles from './styles'
import Form from './Form/Form';
import InfoCard from '../InfoCard';

import Lists from './List/Lists';
// import { useContext } from 'react';

const Main = () => {
    const classes=useStyles();

    const {balance} =useContext(ExpenseTrackerContext);



  return (
    <Card className={classes.root} style={{border: "2px solid black"}}>
        <CardHeader title="Expense Tracker" />
        <CardContent>
            <Typography align="centre" variant="h5">
                total balance ${balance}
            </Typography>
            <Typography variant="subtitle1" style={{lineheight:'1.5rem' , marginTop:'20px'}}>
                <InfoCard/>
            </Typography>
            <Divider/>
           <Form/>


            
           
        </CardContent>
        <CardContent>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Lists/>
                </Grid>
            </Grid>
        </CardContent>


    </Card>
  )
}

export default Main
