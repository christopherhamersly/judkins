import React, { useState, useEffect } from 'react'
// import Calendar from 'react-calendar';
import { Widget, addResponseMessage } from 'react-chat-widget'
import 'react-chat-widget/lib/styles.css';
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
// import Calendar from '../Calendar/calendar'
import Iframe from 'react-iframe'





const useStyles = makeStyles((theme) => ({

  calendar: {
    marginTop: '30'
  }
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
      <Iframe
        classes={classes.calendar}
        src='https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=America%2FLos_Angeles&amp;src=MnEwZDQ2YWN2a3JiNW5kYzAyODZhN2FncjhAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&amp;color=%23D81B60&amp;color=%230B8043&amp;showTitle=0&amp;showNav=0&amp;showPrint=0&amp;showTabs=0&amp;showTz=0&amp;showCalendars=1&amp;showDate=1" style="border:solid 1px #777" width="800" height="600" frameborder="0" scrolling="no"'
        title='court use'
        style={'border: 0'}
        width='75%'
        height='650'
        frameborder='1'
        scrolling='yes' />





      {/* <Typography variant='h4'>
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
    </Typography> */}
      <Widget
        title="Judkins Bot"
        subtitle="How can we help?"
        handleNewUserMessage={handleNewUserMessage} />
    </>
  );
}



export default Home
