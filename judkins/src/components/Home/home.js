import React, { useState, useEffect } from 'react'
// import Calendar from 'react-calendar';
import { Widget, addResponseMessage } from 'react-chat-widget'
import 'react-chat-widget/lib/styles.css';
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'


const useStyles = makeStyles((theme) => ({ 
  
}))

function Home() {

  const classes = useStyles();
  
  useEffect(() => {
    addResponseMessage('Judkins is meant to be a shared space.  Each user group has agreed to times to share the court.  Please refer to the calendar before using this shared space.');
  }, []);
 
  const handleNewUserMessage = (newMessage) => {
    console.log(`New message incoming! ${newMessage}`);
    // Now send the message throught the backend API
    addResponseMessage('please contact us through our contact page');
  };

  return (
    <>
    <Typography variant='h4'>
      Monday
    </Typography>
    <Typography variant='h4'>
      Tuesday
    </Typography>
    <Typography variant='h4'>
      Wednesday
    </Typography>
    <Typography variant='h4'>
      Thursday
    </Typography>
    <Typography variant='h4'>
      Friday
    </Typography>
    <Typography variant='h4'>
      Saturday
    </Typography> <Typography variant='h4'>
      Sunday
    </Typography>
      <Widget 
       title="Judkins Bot"
       subtitle="How can we help?"
      handleNewUserMessage={handleNewUserMessage}/>
    </>
  );
}



export default Home