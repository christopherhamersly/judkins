import React from 'react'
import emailjs from 'emailjs-com';
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({ 
  
}))

function Contact() {

  const classes = useStyles();

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_p0xtwyx', 'template_tekiftt', e.target, 'user_KW0vB700RZZeBNNRTVwcA')
      .then((result) => {
        window.location.reload()
      }, (error) => {
        console.log(error.text);

      });
  }
  return (
    <>
      <h1> Contact </h1>
      <form onSubmit={sendEmail}>
        <input type="hidden" name="contact_number" />
        <label >Name: </label>
        <input type="text" name="from_name" />
        <br></br>
        <label >Email Address: </label>
        <input type="email" name="from_email" />
        <br></br>
        <label >Subject: </label>
        <input type="text" name="subject" />
        <br></br>
        <label >Message: </label>
        <br></br>
        <textarea name="message" />

        <input type="submit" value="Send" />
      </form>
    </>
  )
}

export default Contact
